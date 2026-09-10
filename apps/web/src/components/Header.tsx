import Link from "next/link";

/**
 * components/Header.tsx — sample layout component.
 * Team: replace with real nav + wallet connect button.
 */
export function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 1.5rem",
        borderBottom: "1px solid #e4e4e7",
      }}
    >
      <strong>Attesta</strong>
      <nav style={{ display: "flex", gap: "1rem", fontSize: "0.9rem" }}>
        <Link href="/">Home</Link>
        <Link href="/verify">Verify</Link>
        {/* TODO(team): Admin / Director / Student dashboards */}
      </nav>
    </header>
  );
}
