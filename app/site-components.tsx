import Link from "next/link";
import type { ReactNode } from "react";
import type { Person, Publication, ResearchArea } from "./site-data";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { label: "Research", href: "/research" },
  { label: "People", href: "/people" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
  { label: "Outreach", href: "/outreach" },
  { label: "Media & press", href: "/media" },
];

const moreNavigation = [
  { label: "Software & patents", href: "/software" },
  { label: "Contact", href: "mailto:tsachy@stanford.edu" },
  { label: "Courses", href: "/courses" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Weissman Research Group home">
          <span className="wordmark-mark" aria-hidden="true">
            <span>I<sup>3</sup></span>
          </span>
          <span>
            <strong>Weissman</strong>
            <small>Research Group</small>
          </span>
        </Link>
        <div className="header-actions">
          <nav className="desktop-navigation" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <details className="nav-more">
              <summary>More</summary>
              <div className="nav-more-panel">
                {moreNavigation.map((item) =>
                  item.href.startsWith("mailto:") ? (
                    <a href={item.href} key={item.href}>{item.label}</a>
                  ) : (
                    <Link href={item.href} key={item.href}>{item.label}</Link>
                  ),
                )}
              </div>
            </details>
          </nav>
          <ThemeToggle />
          <details className="mobile-navigation">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}</Link>
              ))}
              <span className="mobile-navigation-label">More</span>
              {moreNavigation.map((item) =>
                item.href.startsWith("mailto:") ? (
                  <a href={item.href} key={item.href}>{item.label}</a>
                ) : (
                  <Link href={item.href} key={item.href}>{item.label}</Link>
                ),
              )}
            </nav>
          </details>
        </div>
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
          <p className="footer-institution">
            <a href="https://ee.stanford.edu/">Electrical Engineering ↗</a>
            <span>Stanford University</span>
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
        <span className="compiled">Last compiled: September 2026 · Q.E.D.</span>
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
  eyebrow?: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={`page-hero${compact ? " page-hero-compact" : ""}`}>
      <div className="hero-grid">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
        </div>
        <div className="hero-abstract">
          <p>{description}</p>
          {children}
        </div>
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
    <div className="member-grid">
      {people.map((person) => {
        const initials = person.name
          .split(" ")
          .map((part) => part[0])
          .slice(0, 2)
          .join("");
        const content = (
          <>
            <span className="member-portrait" aria-hidden="true">
              {person.image ? (
                // A plain image keeps the static GitHub Pages export portable.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={person.image} alt="" loading="lazy" decoding="async" />
              ) : (
                <span className="member-placeholder">{initials}</span>
              )}
            </span>
            <span className="member-copy">
              <strong>
                {person.name}
                {person.year ? <span className="member-year"> ({person.year})</span> : null}
              </strong>
              {person.detail ? <small>{person.detail}</small> : null}
            </span>
          </>
        );

        return person.href ? (
          <a className="member-card" href={person.href} key={person.name}>
            {content}
          </a>
        ) : (
          <div className="member-card" key={person.name}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
