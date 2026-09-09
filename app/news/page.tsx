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
const newsItems: NewsItem[] = [];

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
