import type { Metadata } from "next";
import { PageHeader } from "../site-components";

export const metadata: Metadata = {
  title: "News",
  description:
    "Updates from the Weissman Research Group: people, internships, awards, talks, and new work.",
};

export const dynamic = "force-static";

type NewsItem = {
  date: string;
  title: string;
  text: string;
  href?: string;
};

// Add confirmed group announcements here. Newest items should come first.
const newsItems: NewsItem[] = [
  {
    date: "June 2026",
    title: "Summer internships at Amazon and NVIDIA",
    text: "Jiwon and Naomi have begun internships at Amazon, Matthew has joined Amazon’s neurosymbolic team, and Yasmine has joined NVIDIA. Congratulations to all four!",
  },
  {
    date: "June 2026",
    title: "Welcome, SHTEM summer interns",
    text: "We are delighted to welcome Ansh, Arushi, Ian, Yuji, and Zoya to the group as summer interns through the SHTEM program.",
    href: "https://compression.stanford.edu/outreach/shtem-summer-internships-high-schoolers-and-community-college-students",
  },
  {
    date: "June 2026",
    title: "Congratulations, Abhiram",
    text: "Congratulations to Abhiram on completing his M.S. degree in Electrical Engineering!",
  },
  {
    date: "May 2026",
    title: "Abhiram joins the 2026 Knight-Hennessy Scholars cohort",
    text: "Congratulations to Abhiram on being named to the 2026 cohort of Knight-Hennessy Scholars!",
    href: "https://knight-hennessy.stanford.edu/people/abhiram-gorle",
  },
  {
    date: "March 2026",
    title: "Aayush advances to Ph.D. candidacy",
    text: "Congratulations to Aayush on passing his qualifying examinations and becoming a Ph.D. candidate in Electrical Engineering!",
  },
  {
    date: "2026 · Forthcoming",
    title: "Information-computation trade-offs in non-linear transforms",
    text: "Congratulations to Connor, Abhiram, Jiwon, Naomi, and Tsachy—their work on the interplay between representation, computation, and compression is forthcoming in Philosophical Transactions of the Royal Society A.",
    href: "https://arxiv.org/abs/2506.15948",
  },
  {
    date: "June 2025",
    title: "Three group presentations at ISIT 2025",
    text: "At ISIT 2025 in Ann Arbor, Connor and Abhiram presented “LZMidi: Compression-Based Symbolic Music Generation,” Jiwon presented “Universal Discrete Filtering With Lookahead or Delay,” and Naomi presented “A Family of LZ78-Based Universal Sequential Probability Assignments.”",
    href: "https://2025.ieee-isit.org/technical-program-0",
  },
  {
    date: "June 2025",
    title: "Majority-vote compressed sensing at ICC 2025",
    text: "Jiwon, Henrik, Ayfer, Viktoria, and Carlo presented their work on majority-vote compressed sensing for over-the-air histogram estimation at IEEE ICC.",
    href: "https://arxiv.org/abs/2510.18008",
  },
  {
    date: "April 2025",
    title: "Three papers accepted at ISIT 2025",
    text: "The group had three papers accepted for presentation at ISIT 2025: work on LZMidi, universal discrete filtering, and LZ78-based universal sequential probability assignment. Congratulations to everyone involved!",
    href: "https://2025.ieee-isit.org/",
  },
  {
    date: "June 2024",
    title: "Over-the-air histogram estimation at ICC 2024",
    text: "Henrik, Jiwon, Wei-Ning, Ayfer, Viktoria, and Carlo presented “Over-the-Air Histogram Estimation” at the IEEE International Conference on Communications.",
  },
];

export default function NewsPage() {
  return (
    <main id="main-content">
      <PageHeader
        compact
        title="News"
        description="Updates about group members, awards, talks, internships, and new work."
      />

      <section className="content-section editorial-page">
        <div className="editorial-intro">
          <h2>Group updates</h2>
          <p>Short announcements from across the Weissman Research Group.</p>
        </div>

        {newsItems.length > 0 ? (
          <div className="editorial-list">
            {newsItems.map((item, index) => {
              const content = (
                <>
                  <span className="editorial-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="editorial-title">
                    <p>{item.date}</p>
                    <h3>{item.title}</h3>
                  </div>
                  <p className="editorial-description">{item.text}</p>
                  {item.href ? (
                    <span className="editorial-arrow" aria-hidden="true">↗</span>
                  ) : null}
                </>
              );

              return item.href ? (
                <a className="editorial-row" href={item.href} key={item.title}>
                  {content}
                </a>
              ) : (
                <article className="editorial-row" key={item.title}>
                  {content}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="editorial-empty">
            <p>No announcements have been posted yet.</p>
          </div>
        )}
      </section>
    </main>
  );
}
