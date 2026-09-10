#![cfg(test)]

use super::*;
use soroban_sdk::{vec, Env, String};

#[test]
fn test_hello() {
    let env = Env::default();
    let contract_id = env.register(CertificateContract, ());
    let client = CertificateContractClient::new(&env, &contract_id);

    let words = client.hello(&String::from_str(&env, "certificate"));
    assert_eq!(
        words,
        vec![
            &env,
            String::from_str(&env, "Hello"),
            String::from_str(&env, "certificate"),
        ]
    );
}

// --- Team checklist (uncomment / implement after filling lib.rs) ---
// #[test]
// fn todo_mint_and_get_certificate() { ... }
// #[test]
// fn todo_owns_returns_true_for_student() { ... }
// #[test]
// fn todo_total_supply_increments() { ... }
// #[test]
// fn todo_non_director_cannot_mint() { ... }
