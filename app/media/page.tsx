import type { Metadata } from "next";
import { PageHeader } from "../site-components";

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
        title="Media & press"
        description="From the mathematics behind HBO’s Silicon Valley to the real-world future of compression."
      />

      <section className="content-section editorial-page">
        <div className="editorial-intro">
          <h2>Selected coverage</h2>
          <p>Articles and interviews about the group’s work and its broader influence.</p>
        </div>

        <div className="editorial-list">
          {media.map((item, index) => (
            <a className="editorial-row" href={item.href} key={item.title}>
              <span className="editorial-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="editorial-title">
                <p>{item.source}</p>
                <h3>{item.title}</h3>
              </div>
              <span className="editorial-spacer" aria-hidden="true" />
              <span className="editorial-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
