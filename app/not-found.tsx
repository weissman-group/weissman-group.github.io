import Link from "next/link";

export default function NotFound() {
  return (
    <main className="content-section" id="main-content">
      <div className="theorem-box">
        <span className="theorem-label">404. Lemma not found.</span>
        <p>
          This path carries no information. <Link href="/">Return home →</Link>
        </p>
      </div>
    </main>
  );
}
