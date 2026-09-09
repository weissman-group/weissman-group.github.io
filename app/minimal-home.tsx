import Link from "next/link";
import { I3Mark } from "./i3-mark";

const primaryDestinations = [
  {
    number: "01",
    title: "Research",
    text: "Directions, questions, and current work",
    href: "/research",
  },
  {
    number: "02",
    title: "People",
    text: "Current members, visitors, and alumni",
    href: "/people",
  },
  {
    number: "03",
    title: "Publications",
    text: "Search the group’s research archive",
    href: "/publications",
  },
];

export default function MinimalHome() {
  return (
    <main id="main-content" className="i3-home">
      <section className="i3-hero" aria-labelledby="i3-title">
        <div className="i3-registration" aria-hidden="true">
          <span>WRG / I³</span>
          <span>Stanford, California</span>
        </div>

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
          <p className="i3-thesis">
            The science of information—from first principles to useful systems.
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

        <figure className="i3-hero-mark">
          <I3Mark />
          <figcaption>
            Three connected modes of inquiry; one common language.
          </figcaption>
        </figure>

        <nav className="i3-destinations" aria-label="Explore the group">
          {primaryDestinations.map((destination) => (
            <Link href={destination.href} key={destination.href}>
              <span className="i3-destination-number">{destination.number}</span>
              <span>
                <strong>{destination.title}</strong>
                <small>{destination.text}</small>
              </span>
              <span className="i3-destination-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
