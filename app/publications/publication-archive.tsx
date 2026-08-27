"use client";

import { useMemo, useState } from "react";
import { PublicationRow } from "../site-components";
import type { Publication } from "../site-data";

const topics = ["All", "Theory", "Learning", "Systems", "Science"] as const;

export function PublicationArchive({
  publications,
}: {
  publications: Publication[];
}) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<(typeof topics)[number]>("All");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return publications.filter((publication) => {
      const matchesTopic = topic === "All" || publication.topic === topic;
      const haystack = [
        publication.title,
        publication.authors,
        publication.venue,
        publication.note,
        publication.year,
      ]
        .join(" ")
        .toLowerCase();
      return matchesTopic && (!normalized || haystack.includes(normalized));
    });
  }, [publications, query, topic]);

  return (
    <>
      <div className="filter-panel" role="search">
        <label className="filter-field">
          <span className="filter-label">Search the archive</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="e.g. LZ78, Weissman, genomics…"
            type="search"
            value={query}
          />
        </label>
        <label className="filter-field">
          <span className="filter-label">Research area</span>
          <select
            onChange={(event) =>
              setTopic(event.target.value as (typeof topics)[number])
            }
            value={topic}
          >
            {topics.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <p className="result-count" aria-live="polite">
          {filtered.length} result{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="publication-list">
        {filtered.length ? (
          filtered.map((publication, index) => (
            <PublicationRow
              index={index + 1}
              key={publication.title}
              publication={publication}
            />
          ))
        ) : (
          <p className="empty-state">No papers match those filters.</p>
        )}
      </div>
    </>
  );
}
