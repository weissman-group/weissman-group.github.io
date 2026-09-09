import type { Metadata } from "next";
import { PageHeader } from "../site-components";

export const metadata: Metadata = {
  title: "Outreach",
  description:
    "Programs that invite new communities into information science, research, and public conversation.",
};

export const dynamic = "force-static";

const initiatives = [
  {
    title: "Stanford Compression Forum",
    text: "A cross-disciplinary community connecting compression research, practice, and emerging applications.",
    href: "https://compression.stanford.edu/",
  },
  {
    title: "STEM to SHTEM",
    text: "A summer research internship bringing high-school students into ambitious science and humanities projects.",
    href: "https://compression.stanford.edu/outreach/shtem-summer-internships-high-schoolers-and-community-college-students",
  },
  {
    title: "The Informaticists",
    text: "Student-led outreach exploring information science through teaching, projects, and public conversation.",
    href: "https://theinformaticists.com/",
  },
];

export default function OutreachPage() {
  return (
    <main id="main-content">
      <PageHeader
        compact
        title="Outreach"
        description="Programs that invite new communities into information science, research, and public conversation."
      />

      <section className="content-section editorial-page">
        <div className="editorial-intro">
          <h2>Initiatives</h2>
          <p>Programs and communities connected to the group.</p>
        </div>

        <div className="editorial-list">
          {initiatives.map((initiative, index) => (
            <a
              className="editorial-row"
              href={initiative.href}
              key={initiative.title}
            >
              <span className="editorial-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="editorial-title">
                <p>Initiative</p>
                <h3>{initiative.title}</h3>
              </div>
              <p className="editorial-description">{initiative.text}</p>
              <span className="editorial-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
