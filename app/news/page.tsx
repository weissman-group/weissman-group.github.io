import type { Metadata } from "next";
import { PageHeader } from "../site-components";

export const metadata: Metadata = {
  title: "News",
  description:
    "Updates from the Weissman Research Group: people, internships, awards, talks, and new work.",
};

export const dynamic = "force-static";

export default function NewsPage() {
  return (
    <main id="main-content">
      <PageHeader
        compact
        eyebrow="News"
        title="From the group"
        description="People, internships, awards, talks, and new work from across the Weissman Research Group."
      />

      <section className="content-section news-intro">
        <div>
          <p className="eyebrow">Group updates</p>
          <h2>News will appear here.</h2>
        </div>
        <p>
          This page is ready for short, dated updates about group members and
          their work. We have intentionally left it free of placeholder claims
          until the group confirms the first set of announcements.
        </p>
      </section>
    </main>
  );
}
