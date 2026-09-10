import { Header } from "@/components/Header";
import { CertificateCard } from "@/components/CertificateCard";

/**
 * app/page.tsx — landing sample.
 * Shows how components/ and sample data fit together.
 */
const sampleCertificate = {
  id: "0",
  studentName: "Ada Lovelace",
  course: "Sample Course",
  institution: "Attesta University",
};

export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <Header />
      <main style={{ padding: "2rem", maxWidth: 720, margin: "0 auto" }}>
        <h1>Attesta</h1>
        <p style={{ color: "#52525b", lineHeight: 1.6 }}>
          Frontend sample scaffold. See <code>apps/web/README.md</code> for the
          folder guide. Replace samples with product UI.
        </p>
        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem" }}>Sample component</h2>
          <CertificateCard certificate={sampleCertificate} />
        </section>
      </main>
    </div>
  );
}
