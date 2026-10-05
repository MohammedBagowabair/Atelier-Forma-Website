import { useEffect, useState } from "react";

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
  [
    "01",
    "Interior Architecture",
    "Spatial planning, material direction, and considered details from concept to completion.",
  ],
  [
    "02",
    "Furniture & Styling",
    "A thoughtful edit of custom and collected pieces that gives each space its own rhythm.",
  ],
  [
    "03",
    "Creative Direction",
    "Visual identities and art direction for places designed to leave a lasting impression.",
  ],
];

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#studio", label: "Studio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Atelier Forma home" onClick={closeMenu}>
          Atelier <i>Forma</i>
        </a>

        <nav className="nav-desktop" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="topbar-cta" href="#contact">
          Start a project
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        className={`menu-backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        className={`nav-mobile ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="nav-mobile-inner">
          <div className="nav-mobile-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav-mobile-footer">
            <p>Based in Copenhagen</p>
            <p>Working worldwide</p>
            <a href="mailto:hello@atelierforma.com" onClick={closeMenu}>
              hello@atelierforma.com
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="hero-copy section-pad">
            <p className="eyebrow">Interior design studio · Est. 2018</p>
            <h1>
              Spaces made for <em>slow living.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                We shape quiet, tactile interiors that feel deeply personal and
                effortlessly timeless.
              </p>
              <a className="circle-link" href="#work" aria-label="Explore selected work">
                <span>↓</span>
              </a>
            </div>
          </div>
          <figure className="hero-visual">
            <div className="hero-visual-frame">
              <img
                src="https://images.unsplash.com/photo-1678762200388-51e11225d4de?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800"
                alt="Warm contemporary living room with sculptural furniture and expansive windows"
              />
            </div>
            <figcaption>
              <span>Featured project</span>
              <strong>Casa Alba · 2024</strong>
            </figcaption>
          </figure>
        </section>

        <section className="manifesto section-pad" id="studio">
          <p className="section-label">Our approach</p>
          <div className="manifesto-body">
            <h2>
              We believe the most beautiful spaces are the ones that{" "}
              <em>feel like you.</em>
            </h2>
            <p className="manifesto-copy">
              Our work is grounded in honest materials, natural light, and the
              way you truly live. We design spaces with soul—calm, characterful,
              and made to age beautifully.
            </p>
            <a className="text-link" href="#contact">
              About the studio <span aria-hidden="true">↗</span>
            </a>
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
                <a
                  href="#contact"
                  className="project-image"
                  aria-label={`View ${project.title} project`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} interior design project`}
                    loading="lazy"
                  />
                  <span className="view-project">View project ↗</span>
                </a>
                <div className="project-meta">
                  <div className="project-title-row">
                    <span className="project-index">0{index + 1}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-facts">
                    <p>
                      {project.type} · {project.year}
                    </p>
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
            <h2>
              From first sketch to <em>final object.</em>
            </h2>
          </div>
          <div className="service-list">
            {services.map(([number, title, description]) => (
              <article className="service-item" key={number}>
                <span className="service-number">{number}</span>
                <div className="service-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="quote">
          <div className="quote-image">
            <img
              src="https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600"
              alt="Softly lit minimal living space in warm neutral tones"
              loading="lazy"
            />
          </div>
          <blockquote>
            <p>“A home should tell your story without saying a word.”</p>
            <cite>— Clara Jensen, Founder</cite>
          </blockquote>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-intro">
            <p className="section-label">Start a project</p>
            <h2>Have a space in mind?</h2>
          </div>
          <a className="contact-cta" href="mailto:hello@atelierforma.com">
            <span className="contact-cta-text">Let’s talk</span>
            <span className="contact-cta-icon" aria-hidden="true">
              ↗
            </span>
          </a>
          <div className="contact-details">
            <div>
              <p className="contact-label">Studio</p>
              <p>
                Copenhagen · Denmark
                <br />
                +45 31 58 42 90
              </p>
            </div>
            <div>
              <p className="contact-label">Follow</p>
              <p>
                Instagram
                <br />
                Pinterest
              </p>
            </div>
            <div>
              <p className="contact-label">Email</p>
              <p>
                <a href="mailto:hello@atelierforma.com">hello@atelierforma.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <p>Atelier Forma</p>
        <p>© 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
