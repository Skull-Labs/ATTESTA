#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env, String, Vec, vec};

#[contract]
pub struct RolesContract;

/// Attesta **roles** contract — TODO stubs for the team.
///
/// Planned roles: Admin (owner), Director (issuer), Student (recipient).
/// Replace every `TODO(team)` body with real Soroban storage + auth.
#[contractimpl]
impl RolesContract {
    /// Smoke-test helper — safe to delete once real logic ships.
    pub fn hello(env: Env, to: String) -> Vec<String> {
        vec![&env, String::from_str(&env, "Hello"), to]
    }

    /// TODO(team): set contract admin once; panic if already initialized.
    pub fn initialize(_env: Env, _admin: Address) {
        panic!("TODO(team): initialize — store admin Address in instance storage");
    }

    /// TODO(team): return the current admin address.
    pub fn get_admin(_env: Env) -> Address {
        panic!("TODO(team): get_admin — read admin from instance storage");
    }

    /// TODO(team): transfer admin rights (require current admin auth).
    pub fn transfer_admin(_env: Env, _new_admin: Address) {
        panic!("TODO(team): transfer_admin — require_auth(admin), then update storage");
    }

    /// TODO(team): admin grants Director role to `account`.
    pub fn grant_director(_env: Env, _account: Address) {
        panic!("TODO(team): grant_director — admin-only; persist director flag");
    }

    /// TODO(team): admin revokes Director role from `account`.
    pub fn revoke_director(_env: Env, _account: Address) {
        panic!("TODO(team): revoke_director — admin-only; clear director flag");
    }

    /// TODO(team): admin grants Student role to `account`.
    pub fn grant_student(_env: Env, _account: Address) {
        panic!("TODO(team): grant_student — admin-only; persist student flag");
    }

    /// TODO(team): admin revokes Student role from `account`.
    pub fn revoke_student(_env: Env, _account: Address) {
        panic!("TODO(team): revoke_student — admin-only; clear student flag");
    }

    /// TODO(team): return true if `account` is admin.
    pub fn is_admin(_env: Env, _account: Address) -> bool {
        panic!("TODO(team): is_admin — compare account to stored admin");
    }

    /// TODO(team): return true if `account` has Director role.
    pub fn is_director(_env: Env, _account: Address) -> bool {
        panic!("TODO(team): is_director — read persistent director storage");
    }

    /// TODO(team): return true if `account` has Student role.
    pub fn is_student(_env: Env, _account: Address) -> bool {
        panic!("TODO(team): is_student — read persistent student storage");
    }
}

mod test;
