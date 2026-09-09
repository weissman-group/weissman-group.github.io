import type { Metadata } from "next";
import { PageHeader, SectionHeading } from "../site-components";

export const metadata: Metadata = {
  title: "Software & Patents",
  description:
    "Research outputs beyond the paper: implementations, estimators, compression systems, and patented methods.",
};

export const dynamic = "force-static";

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

export default function SoftwarePage() {
  return (
    <main id="main-content">
      <PageHeader
        compact
        eyebrow="Software & patents"
        title={
          <>
            Ideas you can <em>run.</em>
          </>
        }
        description="Research outputs beyond the paper: implementations, estimators, compression systems, and patented methods."
      />

      <section className="content-section">
        <SectionHeading
          number="01"
          kicker="Software"
          title="Research outputs beyond the paper."
        />
        <div className="output-grid">
          <div className="software-list">
            {software.map((item, index) => (
              <a className="software-row" href={item.href} key={item.title}>
                <span className="software-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p>{item.label}</p>
                  <h3>{item.title}</h3>
                  <span>{item.text}</span>
                </div>
                <span className="software-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <a
            className="patent-card"
            href="https://web.stanford.edu/~tsachy/patents.html"
          >
            <span className="patent-tag">Patents / archive</span>
            <div className="patent-glyph" aria-hidden="true">
              <span>US</span>
              <strong>IP</strong>
              <i />
            </div>
            <h3>
              Patented methods in compression, communication, and inference.
            </h3>
            <span className="patent-link">View patent record ↗</span>
          </a>
        </div>

        <a
          className="text-link"
          href="https://web.stanford.edu/~tsachy/software.html"
        >
          Browse all software <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  );
}
