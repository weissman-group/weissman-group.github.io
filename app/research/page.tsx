import type { Metadata } from "next";
import { PageHeader, SectionHeading } from "../site-components";
import { publications, researchAreas } from "../site-data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research in universal information processing, information-computation trade-offs, learning, generation, and scientific data.",
};

export const dynamic = "force-static";

export default function ResearchPage() {
  return (
    <main id="main-content">
      <PageHeader
        compact
        eyebrow="Research"
        title={
          <>
            Information is the <em>common language.</em>
          </>
        }
        description="Our work begins with fundamental limits and ends with constructive schemes: algorithms, models, and systems that say exactly what the information is worth."
      />

      <div className="content-section">
        <SectionHeading
          number="01"
          kicker="Research directions"
          title="Four questions about information."
        />
        <div className="theorem-box">
          <span className="theorem-label">Guiding problem.</span>
          <p>
            Given data, a task, and a constraint, what is the smallest
            representation that preserves what matters—and how close can a
            practical method get?
          </p>
        </div>

        {researchAreas.map((area) => {
          const selected = area.selectedTitles
            .map((title) => publications.find((paper) => paper.title === title))
            .filter((paper) => paper !== undefined);

          return (
            <section className="research-detail" id={area.slug} key={area.slug}>
              <span className="roman" aria-hidden="true">
                {area.number}
              </span>
              <div>
                <p className="research-question">{area.question}</p>
                <h2>{area.title}</h2>
                <p>{area.summary}</p>
                <ul className="topic-list">
                  {area.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
              <aside className="selected-papers" aria-label="Selected papers">
                <p className="eyebrow">Selected papers</p>
                <ol>
                  {selected.map((paper) => (
                    <li key={paper.title}>
                      <a href={paper.href}>{paper.title}</a>
                    </li>
                  ))}
                </ol>
              </aside>
            </section>
          );
        })}
      </div>
    </main>
  );
}
