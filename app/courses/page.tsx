import type { Metadata } from "next";
import { PageHeader, SectionHeading } from "../site-components";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "A sequence from probability and information theory to universal compression and modern applications.",
};

export const dynamic = "force-static";

const courses = [
  {
    code: "EE 274",
    title: "Data Compression: Theory and Applications",
    term: "Autumn",
    href: "https://stanforddatacompressionclass.github.io/",
  },
  {
    code: "EE 276",
    title: "Information Theory",
    term: "Winter",
    href: "https://explorecourses.stanford.edu/",
  },
  {
    code: "EE 278",
    title: "Probability and Statistical Inference",
    term: "Spring",
    href: "https://explorecourses.stanford.edu/",
  },
  {
    code: "EE 376C",
    title: "Universal Information Processing",
    term: "Special topics",
    href: "https://ee376c.sites.stanford.edu/",
  },
];

export default function CoursesPage() {
  return (
    <main id="main-content">
      <PageHeader
        compact
        eyebrow="Courses"
        title={
          <>
            From probability to <em>compression.</em>
          </>
        }
        description="A sequence from probability and information theory to universal compression and modern applications."
      />

      <section className="content-section">
        <SectionHeading number="01" kicker="Teaching" title="At the board." />
        <table className="course-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Title</th>
              <th>Typical term</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.code}>
                <td className="course-code">{course.code}</td>
                <td>{course.title}</td>
                <td>{course.term}</td>
                <td>
                  <a href={course.href}>course ↗</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="content-section">
        <div className="theorem-box">
          <span className="theorem-label">Office hours.</span>
          <p>
            Course schedules change each academic year. Consult Stanford
            ExploreCourses for the authoritative term, room, and enrollment
            details.
          </p>
        </div>
      </section>
    </main>
  );
}
