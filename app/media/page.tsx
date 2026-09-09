import type { Metadata } from "next";
import { PageHeader, SectionHeading } from "../site-components";

export const metadata: Metadata = {
  title: "Media & Press",
  description:
    "From the mathematics behind HBO’s Silicon Valley to the real-world future of compression.",
};

export const dynamic = "force-static";

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

export default function MediaPage() {
  return (
    <main id="main-content">
      <PageHeader
        compact
        eyebrow="Media & press"
        title={
          <>
            When theory enters <em>culture.</em>
          </>
        }
        description="From the mathematics behind HBO’s Silicon Valley to the real-world future of compression."
      />

      <section className="content-section media-home">
        <SectionHeading
          number="01"
          kicker="Media & press"
          title="Selected coverage."
        />
        <div className="media-grid">
          {media.map((item, index) => (
            <a className="media-card" href={item.href} key={item.title}>
              <div className="media-signal" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <p>{item.source}</p>
              <h3>{item.title}</h3>
              <span className="media-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
