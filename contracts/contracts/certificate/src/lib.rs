#![no_std]
use soroban_sdk::{
    contract, contractimpl, contracttype, Address, Env, String, Vec, vec,
};

/// On-chain certificate record (team: extend fields as needed).
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Certificate {
    pub id: u64,
    pub student: Address,
    pub issuer: Address,
    /// IPFS / HTTPS URI for metadata JSON (e.g. `ipfs://…`).
    pub metadata_uri: String,
}

#[contract]
pub struct CertificateContract;

/// Attesta **certificate** contract — TODO stubs for the team.
///
/// Planned flow: Director mints → metadata URI on-chain → anyone verifies.
/// Optionally call the `roles` contract to enforce issuer permissions.
#[contractimpl]
impl CertificateContract {
    /// Smoke-test helper — safe to delete once real logic ships.
    pub fn hello(env: Env, to: String) -> Vec<String> {
        vec![&env, String::from_str(&env, "Hello"), to]
    }

    /// TODO(team): set admin (and optional roles-contract id); init next_id = 0.
    pub fn initialize(_env: Env, _admin: Address) {
        panic!("TODO(team): initialize — store admin + next certificate id");
    }

    /// TODO(team): optionally wire roles contract address for director checks.
    pub fn set_roles_contract(_env: Env, _roles: Address) {
        panic!("TODO(team): set_roles_contract — admin-only; store roles Contract address");
    }

    /// TODO(team): mint a certificate to `student`; return new id.
    /// Suggested rules: `issuer` must authorize; optionally must be Director via roles.
    pub fn mint(
        _env: Env,
        _issuer: Address,
        _student: Address,
        _metadata_uri: String,
    ) -> u64 {
        panic!("TODO(team): mint — auth issuer, store Certificate, bump next_id, return id");
    }

    /// TODO(team): return certificate by id (panic / error if missing).
    pub fn get_certificate(_env: Env, _id: u64) -> Certificate {
        panic!("TODO(team): get_certificate — load Certificate from persistent storage");
    }

    /// TODO(team): return true if `student` owns certificate `id`.
    pub fn owns(_env: Env, _student: Address, _id: u64) -> bool {
        panic!("TODO(team): owns — check ownership map (student, id)");
    }

    /// TODO(team): return metadata URI string for `id`.
    pub fn get_metadata_uri(_env: Env, _id: u64) -> String {
        panic!("TODO(team): get_metadata_uri — read from stored Certificate");
    }

    /// TODO(team): return how many certificates have been minted.
    pub fn total_supply(_env: Env) -> u64 {
        panic!("TODO(team): total_supply — return next_id / counter");
    }

    /// TODO(team): admin or issuer revokes / marks certificate invalid (if product needs it).
    pub fn revoke(_env: Env, _id: u64) {
        panic!("TODO(team): revoke — optional; mark revoked flag or remove ownership");
    }
}

mod test;
