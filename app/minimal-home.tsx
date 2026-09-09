import Link from "next/link";
import { I3Mark } from "./i3-mark";

const primaryDestinations = [
  {
    title: "Research",
    href: "/research",
    icon: "research",
  },
  {
    title: "People",
    href: "/people",
    icon: "people",
  },
  {
    title: "Publications",
    href: "/publications",
    icon: "publications",
  },
  {
    title: "News",
    href: "/news",
    icon: "news",
  },
] as const;

function DestinationIcon({
  kind,
}: {
  kind: (typeof primaryDestinations)[number]["icon"];
}) {
  return (
    <svg
      aria-hidden="true"
      className="i3-destination-icon"
      fill="none"
      viewBox="0 0 32 32"
    >
      {kind === "research" ? (
        <>
          <circle cx="11" cy="11" r="5.5" />
          <path d="m15 15 5 5M18.5 24.5h7M22 21v7" />
        </>
      ) : null}
      {kind === "people" ? (
        <>
          <circle cx="12" cy="10" r="4" />
          <circle cx="22" cy="12" r="3" />
          <path d="M4.5 26c.7-5 3.2-7.5 7.5-7.5s6.8 2.5 7.5 7.5M18 19.5c4.9-.8 7.9 1.3 8.7 6.5" />
        </>
      ) : null}
      {kind === "publications" ? (
        <>
          <path d="M7 4.5h13l5 5V27.5H7z" />
          <path d="M20 4.5v5h5M11 15h10M11 19h10M11 23h6" />
        </>
      ) : null}
      {kind === "news" ? (
        <>
          <path d="M5 8.5h22v17H5zM9 13h7v6H9zM19 13h4M19 17h4M9 22h14" />
          <path d="M8 5h16" />
        </>
      ) : null}
    </svg>
  );
}

export default function MinimalHome() {
  return (
    <main id="main-content" className="i3-home">
      <section className="i3-hero" aria-labelledby="i3-title">
        <div className="i3-hero-copy">
          <p className="i3-affiliation">
            Stanford University <span>·</span> Electrical Engineering
          </p>
          <div className="i3-heading-lockup">
            <span className="i3-symbol" aria-hidden="true">
              I<sup>3</sup>
            </span>
            <h1 id="i3-title">
              <span>Information,</span>
              <span>Intelligence</span>
              <span>&amp; Inference</span>
            </h1>
          </div>
        </div>

        <div className="i3-hero-mark">
          <I3Mark />
        </div>

        <div className="i3-hero-details">
          <p className="i3-thesis">
            The science of information: from first principles to useful systems.
          </p>
          <p className="i3-description">
            We study how information is represented, learned, compressed, and
            recovered, and how those principles can make intelligent and
            scientific systems more capable.
          </p>
          <div className="i3-actions">
            <Link className="i3-primary-action" href="/research">
              Explore our research <span aria-hidden="true">→</span>
            </Link>
            <Link className="i3-secondary-action" href="/people">
              Meet the group
            </Link>
          </div>
        </div>

        <nav className="i3-destinations" aria-label="Explore the group">
          {primaryDestinations.map((destination) => (
            <Link href={destination.href} key={destination.href}>
              <DestinationIcon kind={destination.icon} />
              <strong>{destination.title}</strong>
              <span className="i3-destination-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
