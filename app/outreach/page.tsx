import type { Metadata } from "next";
import { PageHeader, SectionHeading } from "../site-components";

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
        eyebrow="Outreach"
        title={
          <>
            A wider circle of <em>ideas.</em>
          </>
        }
        description="Programs that invite new communities into information science, research, and public conversation."
      />

      <section className="content-section">
        <SectionHeading
          number="01"
          kicker="Beyond the lab"
          title="A wider circle of ideas."
        />
        <div className="outreach-grid">
          {initiatives.map((initiative, index) => (
            <a
              className="outreach-card"
              href={initiative.href}
              key={initiative.title}
            >
              <span className="outreach-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="outreach-orbit" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <h3>{initiative.title}</h3>
              <p>{initiative.text}</p>
              <span className="outreach-link">Visit initiative ↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
