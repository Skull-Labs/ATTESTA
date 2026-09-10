#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env, Symbol, symbol_short};

/// Role identifiers stored as symbols.
const ADMIN: Symbol = symbol_short!("ADMIN");
const DIRECTOR: Symbol = symbol_short!("DIR");
const STUDENT: Symbol = symbol_short!("STUD");

#[contract]
pub struct RolesContract;

#[contractimpl]
impl RolesContract {
    /// Initialize the contract and set the deployer as admin.
    pub fn initialize(env: Env, admin: Address) {
        if env.storage().instance().has(&ADMIN) {
            panic!("already initialized");
        }
        admin.require_auth();
        env.storage().instance().set(&ADMIN, &admin);
    }

    pub fn get_admin(env: Env) -> Address {
        env.storage().instance().get(&ADMIN).unwrap()
    }

    pub fn is_director(env: Env, account: Address) -> bool {
        env.storage().persistent().has(&(DIRECTOR, account))
    }

    pub fn is_student(env: Env, account: Address) -> bool {
        env.storage().persistent().has(&(STUDENT, account))
    }

    /// Admin grants the director role.
    pub fn grant_director(env: Env, account: Address) {
        Self::require_admin(&env);
        env.storage().persistent().set(&(DIRECTOR, account.clone()), &true);
    }

    /// Admin grants the student role.
    pub fn grant_student(env: Env, account: Address) {
        Self::require_admin(&env);
        env.storage().persistent().set(&(STUDENT, account.clone()), &true);
    }

    fn require_admin(env: &Env) {
        let admin: Address = env.storage().instance().get(&ADMIN).unwrap();
        admin.require_auth();
    }
}

mod test;
