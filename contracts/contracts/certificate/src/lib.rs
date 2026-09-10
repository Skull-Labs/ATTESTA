#![no_std]
use soroban_sdk::{
    contract, contractimpl, contracttype, Address, Env, String, Symbol, symbol_short,
};

const ADMIN: Symbol = symbol_short!("ADMIN");
const NEXT_ID: Symbol = symbol_short!("NEXT_ID");

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Certificate {
    pub id: u64,
    pub student: Address,
    pub issuer: Address,
    pub metadata_uri: String,
}

#[contract]
pub struct CertificateContract;

#[contractimpl]
impl CertificateContract {
    pub fn initialize(env: Env, admin: Address) {
        if env.storage().instance().has(&ADMIN) {
            panic!("already initialized");
        }
        admin.require_auth();
        env.storage().instance().set(&ADMIN, &admin);
        env.storage().instance().set(&NEXT_ID, &0u64);
    }

    /// Mint a certificate NFT-like record to a student.
    /// `issuer` must authorize; roles enforcement can be wired to the roles contract later.
    pub fn mint(
        env: Env,
        issuer: Address,
        student: Address,
        metadata_uri: String,
    ) -> u64 {
        issuer.require_auth();

        let id: u64 = env.storage().instance().get(&NEXT_ID).unwrap_or(0);
        let cert = Certificate {
            id,
            student: student.clone(),
            issuer: issuer.clone(),
            metadata_uri,
        };

        env.storage().persistent().set(&(symbol_short!("CERT"), id), &cert);
        env.storage()
            .persistent()
            .set(&(symbol_short!("OWN"), student.clone(), id), &true);
        env.storage().instance().set(&NEXT_ID, &(id + 1));

        id
    }

    pub fn get_certificate(env: Env, id: u64) -> Certificate {
        env.storage()
            .persistent()
            .get(&(symbol_short!("CERT"), id))
            .unwrap()
    }

    pub fn owns(env: Env, student: Address, id: u64) -> bool {
        env.storage()
            .persistent()
            .has(&(symbol_short!("OWN"), student, id))
    }
}

mod test;
