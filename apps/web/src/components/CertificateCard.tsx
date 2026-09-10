import type { Certificate } from "@/types/certificate";

/**
 * components/CertificateCard.tsx — sample presentational component.
 * Team: style with Tailwind; show IPFS image + on-chain id.
 */
export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <article
      style={{
        border: "1px solid #e4e4e7",
        borderRadius: 8,
        padding: "1rem",
      }}
    >
      <h3 style={{ margin: 0 }}>{certificate.course}</h3>
      <p style={{ margin: "0.5rem 0 0", color: "#52525b" }}>
        {certificate.studentName} · {certificate.institution}
      </p>
      <p style={{ margin: "0.5rem 0 0", fontSize: "0.85rem" }}>
        ID: {certificate.id}
      </p>
    </article>
  );
}
