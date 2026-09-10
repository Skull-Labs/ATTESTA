# Contract TODOs (team checklist)

Stubs live in each crate’s `src/lib.rs` as `panic!("TODO(team): …")`.
Implement the bodies, then add real tests (notes are commented in `test.rs`).

## `roles`

| Function | Purpose |
|----------|---------|
| `initialize(admin)` | One-time admin setup |
| `get_admin()` | Read admin |
| `transfer_admin(new_admin)` | Hand off ownership |
| `grant_director(account)` | Admin grants issuer role |
| `revoke_director(account)` | Admin removes issuer role |
| `grant_student(account)` | Admin grants student role |
| `revoke_student(account)` | Admin removes student role |
| `is_admin(account)` | Role check |
| `is_director(account)` | Role check |
| `is_student(account)` | Role check |

## `certificate`

| Function | Purpose |
|----------|---------|
| `initialize(admin)` | Admin + id counter |
| `set_roles_contract(roles)` | Link to `roles` for Director checks |
| `mint(issuer, student, metadata_uri) -> id` | Issue certificate |
| `get_certificate(id)` | Read full record |
| `owns(student, id)` | Ownership check |
| `get_metadata_uri(id)` | IPFS / metadata URI |
| `total_supply()` | Mint counter |
| `revoke(id)` | Optional invalidation |

## Suggested order

1. Implement `roles` storage + auth; unit-test grants/checks.
2. Implement `certificate` mint/get/owns without roles.
3. Call into `roles` from `mint` so only Directors can issue.
4. Deploy Testnet; put contract IDs in `apps/web` + `apps/api` env files.
