import type { Metadata } from "next";
import { PageHeader, SectionHeading } from "../site-components";

export const metadata: Metadata = {
  title: "Teaching & Community",
  description:
    "Courses, outreach, and community initiatives connected to the Weissman Research Group at Stanford.",
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

const initiatives = [
  {
    numeral: "I",
    title: "Stanford Compression Forum",
    text: "A cross-disciplinary community connecting compression research, practice, and emerging applications.",
    href: "https://compression.stanford.edu/",
  },
  {
    numeral: "II",
    title: "STEM to SHTEM",
    text: "A summer research internship bringing high-school students into ambitious science and humanities projects.",
    href: "https://compression.stanford.edu/outreach/shtem-summer-internships-high-schoolers-and-community-college-students",
  },
  {
    numeral: "III",
    title: "The Informaticists",
    text: "Student-led outreach exploring information science through teaching, projects, and public conversation.",
    href: "https://theinformaticists.com/",
  },
];

export default function CommunityPage() {
  return (
    <main id="main-content">
      <PageHeader
        compact
        eyebrow="Teaching & community"
        title={
          <>
            Information wants to be <em>shared.</em>
          </>
        }
        description="Courses and programs that move information theory beyond the paper: into classrooms, collaborations, and the wider community."
      />

      <section className="content-section">
        <SectionHeading
          number="01"
          kicker="Teaching"
          title="From probability to compression."
        />
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
        <SectionHeading
          number="02"
          kicker="Beyond the lab"
          title="A wider circle of ideas."
        />
        <div className="community-grid">
          {initiatives.map((initiative) => (
            <article className="community-item" key={initiative.title}>
              <span className="roman" aria-hidden="true">
                {initiative.numeral}
              </span>
              <h3>{initiative.title}</h3>
              <p>{initiative.text}</p>
              <a className="text-link" href={initiative.href}>
                Visit project ↗
              </a>
            </article>
          ))}
        </div>
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
