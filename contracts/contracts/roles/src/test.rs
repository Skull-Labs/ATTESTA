#![cfg(test)]

use super::*;
use soroban_sdk::{vec, Env, String};

#[test]
fn test_hello() {
    let env = Env::default();
    let contract_id = env.register(RolesContract, ());
    let client = RolesContractClient::new(&env, &contract_id);

    let words = client.hello(&String::from_str(&env, "roles"));
    assert_eq!(
        words,
        vec![
            &env,
            String::from_str(&env, "Hello"),
            String::from_str(&env, "roles"),
        ]
    );
}

// --- Team checklist (uncomment / implement after filling lib.rs) ---
// #[test]
// fn todo_initialize_sets_admin() { ... }
// #[test]
// fn todo_grant_and_check_director() { ... }
// #[test]
// fn todo_grant_and_check_student() { ... }
// #[test]
// fn todo_non_admin_cannot_grant() { ... }
