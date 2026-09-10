/**
 * app/verify/page.tsx — public verification page (sample).
 * Team: read certificate id from query/path, call API + show result.
 */
export default function VerifyPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Verify certificate</h1>
      <p style={{ color: "#52525b" }}>
        Sample page — wire form + <code>/api/certificates/verify/:id</code>{" "}
        here.
      </p>
    </main>
  );
}
