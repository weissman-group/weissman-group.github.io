import type { Metadata } from "next";
import { PageHeader, PeopleGrid } from "../site-components";
import { formerPeople, people } from "../site-data";

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
        title="People"
        description="Current and former members of the group."
      />

      <div className="content-section people-page">
        <section className="pi-profile-minimal">
          <a
            className="pi-portrait"
            href="https://profiles.stanford.edu/itschak-weissman"
            aria-label="Tsachy Weissman's Stanford profile"
          >
            {/* Official Stanford profile image. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/people/tsachy-weissman.jpg" alt="Tsachy Weissman" />
          </a>
          <div className="pi-copy">
            <p className="people-label">Principal investigator</p>
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

        <section className="roster-section" aria-labelledby="current-members">
          <h2 id="current-members">Current</h2>

          <div className="roster-group">
            <h3>PhD students</h3>
            <PeopleGrid people={people.phd} />
          </div>

          <div className="roster-group">
            <h3>Visiting students</h3>
            <PeopleGrid people={people.visitors} />
          </div>

          <div className="roster-group">
            <h3>Collaborators</h3>
            <PeopleGrid people={people.collaborators} />
          </div>
        </section>

        <section className="former-directory" aria-labelledby="former-members">
          <h2 id="former-members">Former</h2>
          <div className="former-groups">
            {formerPeople.map((group) => (
              <section className="former-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.people.map((person) => (
                    <li key={person.name}>
                      {person.href ? <a href={person.href}>{person.name}</a> : person.name}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
