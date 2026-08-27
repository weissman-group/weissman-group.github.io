import type { Metadata } from "next";
import { PageHeader, PeopleGrid } from "../site-components";
import { alumniHighlights, people } from "../site-data";

export const metadata: Metadata = {
  title: "People",
  description:
    "Students, researchers, visitors, and alumni of the Tsachy Weissman research group at Stanford.",
};

export const dynamic = "force-static";

export default function PeoplePage() {
  return (
    <main id="main-content">
      <PageHeader
        compact
        eyebrow="People · The group"
        title={
          <>
            Theory is a <em>team sport.</em>
          </>
        }
        description="A group of researchers working across information theory, compression, learning, inference, and scientific applications."
      />

      <div className="content-section">
        <section className="pi-profile">
          <div className="pi-monogram" aria-hidden="true">
            TW
          </div>
          <div className="pi-copy">
            <p className="eyebrow">Principal investigator</p>
            <h2>Tsachy Weissman</h2>
            <p className="pi-title">
              Robert and Barbara Kleist Professor in the School of Engineering
            </p>
            <p>
              Tsachy Weissman is Professor of Electrical Engineering at
              Stanford and founding director of the Stanford Compression
              Forum. He studies the science of information, with applications
              across genomics, neuroscience, learning, and technology.
            </p>
            <p>
              An IEEE Fellow, he has received research and teaching awards from
              the IEEE Information Theory and Communications societies. His
              students have gone on to faculty roles, technical leadership, and
              entrepreneurship.
            </p>
            <p>
              <a className="text-link" href="https://profiles.stanford.edu/itschak-weissman">
                Stanford profile ↗
              </a>
              {" · "}
              <a className="text-link" href="https://scholar.google.com/citations?user=nTiSnwUAAAAJ&hl=en">
                Google Scholar ↗
              </a>
            </p>
          </div>
        </section>

        <section className="people-section">
          <div>
            <p className="eyebrow">Current</p>
            <h2>PhD advisees</h2>
          </div>
          <PeopleGrid people={people.phd} />
        </section>

        <section className="people-section">
          <div>
            <p className="eyebrow">Across groups</p>
            <h2>Affiliated researchers</h2>
          </div>
          <PeopleGrid people={people.affiliates} />
        </section>

        <section className="people-section">
          <div>
            <p className="eyebrow">Extended group</p>
            <h2>Students & visitors</h2>
          </div>
          <PeopleGrid people={[...people.students, ...people.visitors]} />
        </section>

        <section className="people-section">
          <div>
            <p className="eyebrow">Selected</p>
            <h2>Alumni</h2>
          </div>
          <ul className="alumni-line">
            {alumniHighlights.map((person) => (
              <li key={person.name}>{person.name}</li>
            ))}
          </ul>
        </section>

        <div className="theorem-box">
          <span className="theorem-label">Roster note.</span>
          <p>
            Research affiliations change quickly. This draft distinguishes
            advisees, cross-group collaborators, and visitors; the group will
            confirm the final launch roster.
          </p>
        </div>
      </div>
    </main>
  );
}
