import type { Metadata } from "next";
import { PageHeader } from "../site-components";
import { publications } from "../site-data";
import { PublicationArchive } from "./publication-archive";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Selected recent publications from the Weissman Research Group in information theory, learning, systems, and scientific applications.",
};

export const dynamic = "force-static";

export default function PublicationsPage() {
  return (
    <main id="main-content">
      <PageHeader
        compact
        eyebrow="Publications · Selected recent work"
        title={
          <>
            Results, proofs, and <em>working code.</em>
          </>
        }
        description="Browse a curated selection of recent group work. The archive is organized for people first: search by title, author, venue, or research topic."
      />

      <div className="content-section">
        <PublicationArchive publications={publications} />
        <div className="theorem-box">
          <span className="theorem-label">Complete record.</span>
          <p>
            For the full bibliography and citation history, visit Professor
            Weissman’s{" "}
            <a href="https://scholar.google.com/citations?user=nTiSnwUAAAAJ&hl=en">
              Google Scholar profile
            </a>{" "}
            or <a href="https://dblp.org/pid/34/2720.html">DBLP</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
