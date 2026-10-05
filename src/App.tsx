import { useState } from "react";

const projects = [
  {
    title: "Solace House",
    location: "Copenhagen, DK",
    type: "Residential",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600",
  },
  {
    title: "The Quiet Room",
    location: "London, UK",
    type: "Hospitality",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
  },
  {
    title: "Terra Apartment",
    location: "Barcelona, ES",
    type: "Residential",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1724582586458-a51791349977?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
  },
];

const services = [
  ["01", "Interior Architecture", "Spatial planning, material direction, and considered details from concept to completion."],
  ["02", "Furniture & Styling", "A thoughtful edit of custom and collected pieces that gives each space its own rhythm."],
  ["03", "Creative Direction", "Visual identities and art direction for places designed to leave a lasting impression."],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Atelier Forma home" onClick={closeMenu}>
          Atelier <i>Forma</i>
        </a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#studio" onClick={closeMenu}>Studio</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <span className="nav-note">Based in Copenhagen<br />Working worldwide</span>
        </nav>
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">Interior design studio · Est. 2018</p>
            <h1>Spaces made for <em>slow living.</em></h1>
            <div className="hero-bottom">
              <p>We shape quiet, tactile interiors that feel deeply personal and effortlessly timeless.</p>
              <a className="circle-link" href="#work" aria-label="Explore selected work">↓</a>
            </div>
          </div>
          <figure className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1678762200388-51e11225d4de?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800"
              alt="Warm contemporary living room with sculptural furniture and expansive windows"
            />
            <figcaption>
              <span>Featured project</span>
              <span>Casa Alba · 2024</span>
            </figcaption>
          </figure>
        </section>

        <section className="manifesto section-pad" id="studio">
          <p className="section-label">Our approach</p>
          <div>
            <h2>We believe the most beautiful spaces are the ones that <em>feel like you.</em></h2>
            <p className="manifesto-copy">
              Our work is grounded in honest materials, natural light, and the way you truly live. We design spaces
              with soul—calm, characterful, and made to age beautifully.
            </p>
            <a className="text-link" href="#contact">About the studio <span>↗</span></a>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading">
            <p className="section-label">Selected work</p>
            <p className="project-count">(03)</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project project-${index + 1}`} key={project.title}>
                <a href="#contact" className="project-image" aria-label={`View ${project.title} project`}>
                  <img src={project.image} alt={`${project.title} interior design project`} />
                  <span className="view-project">View project ↗</span>
                </a>
                <div className="project-meta">
                  <div>
                    <span className="project-index">0{index + 1}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <div>
                    <p>{project.type} · {project.year}</p>
                    <p>{project.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="services-intro">
            <p className="section-label">What we do</p>
            <h2>From first sketch to <em>final object.</em></h2>
          </div>
          <div className="service-list">
            {services.map(([number, title, description]) => (
              <article className="service-item" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="quote">
          <div className="quote-image">
            <img
              src="https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600"
              alt="Softly lit minimal living space in warm neutral tones"
            />
          </div>
          <blockquote>
            “A home should tell your story without saying a word.”
            <cite>— Clara Jensen, Founder</cite>
          </blockquote>
        </section>

        <section className="contact section-pad" id="contact">
          <p className="section-label">Start a project</p>
          <h2>Have a space in mind?</h2>
          <a href="mailto:hello@atelierforma.com">Let’s talk <span>↗</span></a>
          <div className="contact-details">
            <p>Copenhagen · Denmark<br />+45 31 58 42 90</p>
            <p>Instagram<br />Pinterest</p>
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <p>Atelier Forma</p>
        <p>© 2025</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
