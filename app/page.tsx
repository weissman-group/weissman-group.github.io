import Link from "next/link";
import { InformationField, PublicationVisual, ResearchVisual } from "./home-visuals";
import { people, publications, researchAreas } from "./site-data";

const software = [
  {
    label: "Universal compression",
    title: "LZ78 Sequential Probability Assignment",
    text: "A fast Rust implementation of an LZ78-based universal sequential probability assignment.",
    href: "https://github.com/NSagan271/lz78_rust",
  },
  {
    label: "Scientific data",
    title: "LFZip",
    text: "A lossy compressor designed for high-volume floating-point time-series data.",
    href: "https://github.com/shubhamchandak94/LFZip",
  },
  {
    label: "Estimation",
    title: "JVHW Estimator",
    text: "Estimators for entropy, Rényi entropy, and mutual information from undersampled data.",
    href: "https://web.stanford.edu/~tsachy/index_jvhw.html",
  },
];

const courses = [
  ["EE 274", "Data Compression: Theory and Applications", "Autumn", "https://stanforddatacompressionclass.github.io/"],
  ["EE 276", "Information Theory", "Winter", "https://explorecourses.stanford.edu/"],
  ["EE 278", "Probability and Statistical Inference", "Spring", "https://explorecourses.stanford.edu/"],
  ["EE 376C", "Universal Information Processing", "Special topics", "https://ee376c.sites.stanford.edu/"],
];

const outreach = [
  {
    title: "Stanford Compression Forum",
    text: "A cross-disciplinary community connecting compression research, practice, and emerging applications.",
    href: "https://compression.stanford.edu/",
  },
  {
    title: "STEM to SHTEM",
    text: "A summer research program bringing high-school and community-college students into ambitious projects.",
    href: "https://compression.stanford.edu/outreach/shtem-summer-internships-high-schoolers-and-community-college-students",
  },
  {
    title: "The Informaticists",
    text: "Student-led outreach exploring information science through teaching, projects, and public conversation.",
    href: "https://theinformaticists.com/",
  },
];

const media = [
  {
    source: "Stanford News",
    title: "Q&A with Stanford faculty on Silicon Valley",
    href: "https://news.stanford.edu/stories/2019/12/qa-stanford-faculty-silicon-valley",
  },
  {
    source: "IEEE Spectrum",
    title: "A Made-For-TV Compression Algorithm",
    href: "https://spectrum.ieee.org/a-madefortv-compression-algorithm",
  },
  {
    source: "Stanford Magazine",
    title: "Silicon Valley Validity",
    href: "https://stanfordmag.org/contents/silicon-valley-validity",
  },
  {
    source: "IEEE Spectrum",
    title: "A Fictional Compression Metric Moves Into the Real World",
    href: "https://spectrum.ieee.org/a-madefortv-compression-metric-moves-to-the-real-world",
  },
];

export default function Home() {
  const featuredPeople = people.phd.slice(0, 6);
  const featuredPublications = [
    publications.find((paper) => paper.title.startsWith("GaussianVision")),
    publications.find((paper) => paper.title.startsWith("A Framework for Compressive")),
    publications.find((paper) => paper.title.startsWith("Universal Discrete Filtering")),
    publications.find((paper) => paper.title === "The LZ78 Source"),
  ].filter((paper) => paper !== undefined);

  return (
    <main id="main-content" className="home-page">
      <section className="home-hero">
        <div className="home-grid-marks" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="home-hero-copy">
          <p className="home-kicker">Stanford University · Electrical Engineering</p>
          <h1>
            <span>Weissman</span>
            <span>Research Group</span>
          </h1>
          <p className="home-manifesto">
            The science of information—from first principles to useful systems.
          </p>
          <p className="home-intro">
            We study how information is represented, learned, compressed, and
            recovered—and how those principles can make intelligent and
            scientific systems more capable.
          </p>
          <div className="home-actions">
            <Link className="home-button home-button-dark" href="/research">
              Explore our research <span aria-hidden="true">↗</span>
            </Link>
            <Link className="home-button home-button-light" href="/people">
              Meet the group
            </Link>
          </div>
        </div>
        <div className="home-hero-art">
          <InformationField />
        </div>
        <div className="home-hero-foot">
          <span>Universal compression</span>
          <span>Learning & generation</span>
          <span>Information-efficient systems</span>
          <span>Science & sensing</span>
        </div>
      </section>

      <section className="home-section research-thrusts" id="research-directions">
        <div className="home-section-heading">
          <div>
            <p className="home-kicker">01 / Research directions</p>
            <h2>Four questions about information.</h2>
          </div>
          <p>
            Our work begins with fundamental limits and ends with constructive
            schemes: algorithms, models, and systems that say what information
            is worth.
          </p>
        </div>

        <div className="research-bento">
          {researchAreas.map((area, index) => (
            <Link
              className={`research-card research-card-${index + 1}`}
              href={`/research#${area.slug}`}
              key={area.slug}
            >
              <div className="research-card-art">
                <ResearchVisual slug={area.slug} />
                <span className="research-card-index">0{index + 1}</span>
              </div>
              <div className="research-card-copy">
                <p>{area.question}</p>
                <h3>{area.title}</h3>
                <ul aria-label={`${area.title} topics`}>
                  {area.topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </div>
            </Link>
          ))}
        </div>

        <Link className="home-inline-link" href="/research">
          Explore all research <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="home-section selected-work">
        <div className="home-section-heading">
          <div>
            <p className="home-kicker">02 / Papers</p>
            <h2>Recent papers.</h2>
          </div>
          <p>
            A curated selection of recent group work across theory, learning,
            systems, and scientific applications.
          </p>
        </div>

        <div className="work-filmstrip">
          {featuredPublications.map((publication, index) => (
            <article className="work-card" key={publication.title}>
              <a className="work-card-art" href={publication.href} aria-label={`Read ${publication.title}`}>
                <PublicationVisual index={index} />
                <span>{publication.topic} / {publication.year}</span>
              </a>
              <div className="work-card-copy">
                <p>{publication.venue}</p>
                <h3><a href={publication.href}>{publication.title}</a></h3>
                <span className="work-authors">{publication.authors}</span>
              </div>
            </article>
          ))}
        </div>

        <Link className="home-inline-link" href="/publications">
          Browse publications <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="people-preview">
        <div className="people-preview-intro">
          <p className="home-kicker">03 / People</p>
          <h2>Theory is a team sport.</h2>
          <p>
            Researchers working across information theory, compression,
            learning, inference, and scientific applications.
          </p>
          <div className="pi-line">
            <span className="pi-badge" aria-hidden="true">TW</span>
            <span>
              <strong>Tsachy Weissman</strong>
              <small>Robert and Barbara Kleist Professor in the School of Engineering</small>
            </span>
          </div>
          <Link className="home-button home-button-light" href="/people">
            Meet everyone <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="people-preview-list">
          <p className="people-list-label">Current PhD advisees / selected</p>
          {featuredPeople.map((person, index) => {
            const row = (
              <>
                <span className="people-preview-number">0{index + 1}</span>
                <span className="people-preview-name">{person.name}</span>
                <span className="people-preview-detail">{person.detail ?? "Researcher"}</span>
                <span aria-hidden="true">{person.href ? "↗" : "·"}</span>
              </>
            );
            return person.href ? (
              <a className="people-preview-row" href={person.href} key={person.name}>{row}</a>
            ) : (
              <div className="people-preview-row" key={person.name}>{row}</div>
            );
          })}
        </div>
      </section>

      <section className="home-section output-section" id="software">
        <div className="home-section-heading">
          <div>
            <p className="home-kicker">04 / Software & patents</p>
            <h2>Ideas you can run.</h2>
          </div>
          <p>
            Research outputs beyond the paper: implementations, estimators,
            compression systems, and patented methods.
          </p>
        </div>

        <div className="output-grid">
          <div className="software-list">
            {software.map((item, index) => (
              <a className="software-row" href={item.href} key={item.title}>
                <span className="software-index">0{index + 1}</span>
                <div>
                  <p>{item.label}</p>
                  <h3>{item.title}</h3>
                  <span>{item.text}</span>
                </div>
                <span className="software-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <a className="patent-card" href="https://web.stanford.edu/~tsachy/patents.html">
            <span className="patent-tag">Patents / archive</span>
            <div className="patent-glyph" aria-hidden="true">
              <span>US</span>
              <strong>IP</strong>
              <i />
            </div>
            <h3>Patented methods in compression, communication, and inference.</h3>
            <span className="patent-link">View patent record ↗</span>
          </a>
        </div>
        <a className="home-inline-link" href="https://web.stanford.edu/~tsachy/software.html">
          Browse all software <span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="home-section courses-home" id="courses">
        <div className="home-section-heading">
          <div>
            <p className="home-kicker">05 / Courses</p>
            <h2>At the board.</h2>
          </div>
          <p>
            A sequence from probability and information theory to universal
            compression and modern applications.
          </p>
        </div>

        <ul className="course-preview" aria-label="Selected courses">
          {courses.map(([code, title, term, href], index) => (
            <li key={code}>
              <a className="course-preview-row" href={href}>
                <span className="course-preview-index">0{index + 1}</span>
                <strong>{code}</strong>
                <span>{title}</span>
                <small>{term}</small>
                <i aria-hidden="true">↗</i>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-section outreach-home" id="outreach">
        <div className="home-section-heading">
          <div>
            <p className="home-kicker">06 / Outreach</p>
            <h2>A wider circle of ideas.</h2>
          </div>
          <p>
            Programs that invite new communities into information science,
            research, and public conversation.
          </p>
        </div>

        <div className="outreach-grid">
          {outreach.map((item, index) => (
            <a className="outreach-card" href={item.href} key={item.title}>
              <span className="outreach-index">0{index + 1}</span>
              <div className="outreach-orbit" aria-hidden="true"><i /><i /><i /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="outreach-link">Visit initiative ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="home-section media-home" id="media">
        <div className="home-section-heading">
          <div>
            <p className="home-kicker">07 / Media & press</p>
            <h2>When theory enters culture.</h2>
          </div>
          <p>
            From the mathematics behind HBO’s <em>Silicon Valley</em> to the
            real-world future of compression.
          </p>
        </div>

        <div className="media-grid">
          {media.map((item, index) => (
            <a className="media-card" href={item.href} key={item.title}>
              <div className="media-signal" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i /><i /><i /><i /><i />
              </div>
              <p>{item.source}</p>
              <h3>{item.title}</h3>
              <span className="media-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-panel" id="contact">
        <div className="contact-panel-heading">
          <p className="home-kicker">08 / Connect</p>
          <h2>Join the conversation.</h2>
        </div>
        <div className="contact-panel-copy">
          <p>
            We welcome thoughtful conversations with students, researchers,
            and practitioners who care about information, compression, and learning.
          </p>
          <a className="contact-email" href="mailto:tsachy@stanford.edu">
            tsachy@stanford.edu <span aria-hidden="true">↗</span>
          </a>
          <p className="contact-note">
            Please note that Professor Weissman cannot respond to most direct
            inquiries regarding graduate or postdoctoral openings.
          </p>
        </div>
      </section>
    </main>
  );
}
