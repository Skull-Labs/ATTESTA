#![cfg(test)]

use super::*;
use soroban_sdk::{testutils::Address as _, Address, Env};

#[test]
fn initialize_sets_admin() {
    let env = Env::default();
    env.mock_all_auths();
    let contract_id = env.register(RolesContract, ());
    let client = RolesContractClient::new(&env, &contract_id);
    let admin = Address::generate(&env);

    client.initialize(&admin);
    assert_eq!(client.get_admin(), admin);
}

#[test]
fn grant_director_and_student() {
    let env = Env::default();
    env.mock_all_auths();
    let contract_id = env.register(RolesContract, ());
    let client = RolesContractClient::new(&env, &contract_id);
    let admin = Address::generate(&env);
    let director = Address::generate(&env);
    let student = Address::generate(&env);

    client.initialize(&admin);
    client.grant_director(&director);
    client.grant_student(&student);

    assert!(client.is_director(&director));
    assert!(client.is_student(&student));
    assert!(!client.is_director(&student));
}
