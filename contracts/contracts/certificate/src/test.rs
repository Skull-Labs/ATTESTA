#![cfg(test)]

use super::*;
use soroban_sdk::{testutils::Address as _, Address, Env, String};

#[test]
fn mint_and_read_certificate() {
    let env = Env::default();
    env.mock_all_auths();
    let contract_id = env.register(CertificateContract, ());
    let client = CertificateContractClient::new(&env, &contract_id);

    let admin = Address::generate(&env);
    let issuer = Address::generate(&env);
    let student = Address::generate(&env);

    client.initialize(&admin);

    let uri = String::from_str(&env, "ipfs://QmExampleMetadata");
    let id = client.mint(&issuer, &student, &uri);

    assert_eq!(id, 0);
    let cert = client.get_certificate(&id);
    assert_eq!(cert.student, student);
    assert_eq!(cert.issuer, issuer);
    assert!(client.owns(&student, &id));
}
