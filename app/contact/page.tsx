import type { Metadata } from "next";
import { PageHeader } from "../site-components";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tsachy Weissman and the Weissman Research Group at Stanford University.",
};

export const dynamic = "force-static";

const contacts = [
  {
    role: "Principal investigator",
    name: "Tsachy Weissman",
    email: "tsachy@stanford.edu",
    phone: "(650) 736-1418",
    room: "Room 256",
  },
  {
    role: "Administrator",
    name: "Shea Goodner",
    email: "sgoodner@stanford.edu",
    phone: "(650) 724-8413",
    room: "Room 259",
  },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader
        compact
        title="Contact"
        description="Faculty, administrative, and location details for the group at Stanford."
      />

      <section className="content-section contact-page">
        <div className="editorial-intro">
          <h2>Get in touch</h2>
          <p>
            Direct research questions to Tsachy and administrative questions
            to Shea Goodner.
          </p>
        </div>

        <div className="contact-directory">
          {contacts.map((contact) => (
            <article className="contact-entry" key={contact.email}>
              <p className="contact-role">{contact.role}</p>
              <h2>{contact.name}</h2>
              <div className="contact-links">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}>
                  {contact.phone}
                </a>
              </div>
              <address>
                Packard Building, {contact.room}
                <br />
                350 Jane Stanford Way
                <br />
                Stanford, CA 94305
              </address>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
