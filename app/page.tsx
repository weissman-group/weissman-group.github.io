import Link from "next/link";
import {
  PageHeader,
  PublicationRow,
  ResearchRow,
  SectionHeading,
} from "./site-components";
import { publications, researchAreas } from "./site-data";

const updates = [
  {
    date: "Jun 2026",
    type: "Conference",
    title: "GaussianVision receives a CVPR 2026 Highlight",
    href: "https://openaccess.thecvf.com/content/CVPR2026/html/Omri_GaussianVision_Vision-Language_Alignment_from_Compressed_Image_Representations_using_2D_Gaussian_CVPR_2026_paper.html",
  },
  {
    date: "May 2026",
    type: "Journal",
    title: "Compressive neural recording appears in IEEE TBME",
    href: "https://doi.org/10.1109/TBME.2025.3615514",
  },
  {
    date: "Apr 2026",
    type: "Paper",
    title: "The LZ78 Source: new revision and journal version",
    href: "https://arxiv.org/abs/2503.10574",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Stanford University · Electrical Engineering"
        title={
          <>
            The science of <em>information</em>, from first principles to
            useful systems.
          </>
        }
        description="We study how information is represented, learned, compressed, and recovered—and how those principles can make intelligent and scientific systems more capable."
      >
        <div className="hero-actions">
          <Link className="button button-primary" href="/research">
            Explore our research <span aria-hidden="true">→</span>
          </Link>
          <Link className="button button-quiet" href="/people">
            Meet the group
          </Link>
        </div>
      </PageHeader>

      <section className="paper-strip" aria-label="Research statement">
        <div className="paper-strip-label">Abstract</div>
        <p>
          Led by Tsachy Weissman, the group develops theory and tools for
          universal compression, statistical inference, learning, and
          information-efficient computation—with applications spanning AI,
          genomics, neuroscience, and technology.
        </p>
        <div className="equation-signature" aria-label="Entropy equation">
          H(X) = −∑<sub>x</sub> p(x) log p(x)
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          number="01"
          kicker="Research directions"
          title="Questions worth compressing a lifetime into."
          action={{ label: "All research", href: "/research" }}
        />
        <div className="research-list">
          {researchAreas.slice(0, 3).map((area) => (
            <ResearchRow area={area} key={area.slug} />
          ))}
        </div>
      </section>

      <section className="section-shell section-tinted">
        <SectionHeading
          number="02"
          kicker="Selected work"
          title="Recent results, set in context."
          action={{ label: "Publication archive", href: "/publications" }}
        />
        <div className="publication-list compact-publications">
          {publications.slice(0, 4).map((publication, index) => (
            <PublicationRow
              index={index + 1}
              key={publication.title}
              publication={publication}
            />
          ))}
        </div>
      </section>

      <section className="section-shell updates-grid">
        <SectionHeading
          number="03"
          kicker="Notebook"
          title="Recently compiled."
          action={{ label: "Teaching & community", href: "/community" }}
        />
        <div className="updates-list">
          {updates.map((update) => (
            <article className="update-row" key={update.title}>
              <time>{update.date}</time>
              <span className="update-type">{update.type}</span>
              <h3>
                <a href={update.href}>{update.title}</a>
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="join-panel" id="join">
        <div>
          <span className="section-number">04</span>
          <p className="eyebrow">Join the conversation</p>
          <h2>Good problems are social objects.</h2>
        </div>
        <div className="join-copy">
          <p>
            We welcome thoughtful conversations with students, researchers,
            and practitioners who care about information, compression, and
            learning.
          </p>
          <p className="fine-print">
            Please note that Professor Weissman cannot respond to most direct
            inquiries regarding graduate or postdoctoral openings.
          </p>
          <a className="text-link" href="mailto:tsachy@stanford.edu">
            tsachy@stanford.edu <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
