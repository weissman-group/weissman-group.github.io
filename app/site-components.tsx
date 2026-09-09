import Link from "next/link";
import type { ReactNode } from "react";
import type { Person, Publication, ResearchArea } from "./site-data";

const navigation = [
  { label: "Research", href: "/research" },
  { label: "People", href: "/people" },
  { label: "Publications", href: "/publications" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Weissman Research Group home">
          <span className="wordmark-mark" aria-hidden="true">
            W
          </span>
          <span>
            <strong>Weissman</strong>
            <small>Research Group</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <details className="nav-more">
            <summary>More</summary>
            <div className="nav-more-panel">
              <Link href="/#software">Software & patents</Link>
              <Link href="/#courses">Courses</Link>
              <Link href="/#outreach">Outreach</Link>
              <Link href="/#media">Media & press</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </details>
          <a className="nav-stanford" href="https://ee.stanford.edu/">
            Stanford EE <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-title">Weissman Research Group</p>
          <p>
            Electrical Engineering
            <br />
            Stanford University
          </p>
        </div>
        <div>
          <p className="footer-label">Find us</p>
          <address>
            Packard Building, Room 256
            <br />
            350 Jane Stanford Way
            <br />
            Stanford, CA 94305
          </address>
        </div>
        <div>
          <p className="footer-label">Elsewhere</p>
          <a href="https://web.stanford.edu/~tsachy/">Faculty page ↗</a>
          <a href="https://compression.stanford.edu/">Compression Forum ↗</a>
          <a href="mailto:tsachy@stanford.edu">Email ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Stanford University</span>
        <span className="compiled">Last compiled: August 2026 · Q.E.D.</span>
      </div>
    </footer>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  compact = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={`page-hero${compact ? " page-hero-compact" : ""}`}>
      <div className="hero-registration" aria-hidden="true">
        <span>WRG · 001</span>
        <span>37.4275° N / 122.1697° W</span>
      </div>
      <div className="hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="hero-abstract">
          <span className="abstract-label">Abstract</span>
          <p>{description}</p>
          {children}
        </div>
      </div>
      <div className="signal-rule" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

export function SectionHeading({
  number,
  kicker,
  title,
  action,
}: {
  number: string;
  kicker: string;
  title: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {action ? (
        <Link className="text-link heading-link" href={action.href}>
          {action.label} <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );
}

export function ResearchRow({ area }: { area: ResearchArea }) {
  return (
    <article className="research-row" id={area.slug}>
      <span className="roman" aria-hidden="true">
        {area.number}
      </span>
      <div>
        <p className="research-question">{area.question}</p>
        <h3>{area.title}</h3>
        <p>{area.summary}</p>
        <ul className="topic-list" aria-label={`${area.title} topics`}>
          {area.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
      <code className="margin-equation">{area.equation}</code>
    </article>
  );
}

export function PublicationRow({
  publication,
  index,
}: {
  publication: Publication;
  index: number;
}) {
  return (
    <article className="publication-row">
      <span className="publication-index">[{String(index).padStart(2, "0")}]</span>
      <div className="publication-main">
        <p className="publication-meta">
          {publication.year} · {publication.topic}
          {publication.note ? ` · ${publication.note}` : ""}
        </p>
        <h3>
          <a href={publication.href}>{publication.title}</a>
        </h3>
        <p className="publication-authors">{publication.authors}</p>
        <p className="publication-venue">{publication.venue}</p>
      </div>
      <div className="publication-links">
        <a href={publication.href}>paper ↗</a>
        {publication.code ? <a href={publication.code}>code ↗</a> : null}
      </div>
    </article>
  );
}

export function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <div className="people-grid">
      {people.map((person) => {
        const initials = person.name
          .split(" ")
          .map((part) => part[0])
          .slice(0, 2)
          .join("");
        const content = (
          <>
            <span className="person-initials" aria-hidden="true">
              {initials}
            </span>
            <span>
              <strong>{person.name}</strong>
              {person.detail ? <small>{person.detail}</small> : null}
            </span>
            {person.href ? <span aria-hidden="true">↗</span> : null}
          </>
        );

        return person.href ? (
          <a className="person-row" href={person.href} key={person.name}>
            {content}
          </a>
        ) : (
          <div className="person-row" key={person.name}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
