import { useEffect } from "react";
import "./tooplate-minimal-white-style.css";

function App() {
  // useEffect(() => {
  //   // Mobile menu toggle
  //   const menuToggle = document.getElementById("menuToggle");
  //   const navLinks = document.getElementById("navLinks");

  //   if (menuToggle && navLinks) {
  //     menuToggle.addEventListener("click", () => {
  //       menuToggle.classList.toggle("active");
  //       navLinks.classList.toggle("active");
  //     });

  //     document.querySelectorAll(".nav-link").forEach(link => {
  //       link.addEventListener("click", () => {
  //         menuToggle.classList.remove("active");
  //         navLinks.classList.remove("active");
  //       });
  //     });
  //   }

  //   // Navbar scroll effect + active menu
  //   const sections = document.querySelectorAll("section");
  //   const navItems = document.querySelectorAll(".nav-link");
  //   const navbar = document.getElementById("navbar");

  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       navbar?.classList.add("scrolled");
  //     } else {
  //       navbar?.classList.remove("scrolled");
  //     }

  //     let current = "";
  //     sections.forEach(section => {
  //       const sectionTop = section.offsetTop;
  //       if (scrollY >= sectionTop - 100) {
  //         current = section.getAttribute("id");
  //       }
  //     });

  //     navItems.forEach(item => {
  //       item.classList.remove("active");
  //       if (item.getAttribute("href")?.slice(1) === current) {
  //         item.classList.add("active");
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   onScroll();

  //   // Smooth scroll
  //   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //     anchor.addEventListener("click", e => {
  //       e.preventDefault();
  //       const target = document.querySelector(anchor.getAttribute("href"));
  //       if (target) {
  //         target.scrollIntoView({ behavior: "smooth", block: "start" });
  //       }
  //     });
  //   });

  //   // Fade-in observer
  //   const observer = new IntersectionObserver(
  //     entries => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("visible");
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  //   );

  //   document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  //   // Form handler
  //   const form = document.querySelector("form");
  //   if (form) {
  //     form.addEventListener("submit", e => {
  //       e.preventDefault();
  //       alert("Message sent successfully!");
  //       form.reset();
  //     });
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <>
      {/* Navigation */}
      <nav id="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">MINIMAL</a>
          <div className="menu-toggle" id="menuToggle">
            <span />
            <span />
            <span />
          </div>
          <ul className="nav-links" id="navLinks">
            <li><a href="#home" className="nav-link">HOME</a></li>
            <li><a href="#about" className="nav-link">ABOUT</a></li>
            <li><a href="#services" className="nav-link">SERVICES</a></li>
            <li><a href="#contact" className="nav-link">CONTACT</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="floating-objects">
          <div className="floating-circle" />
          <div className="floating-circle" />
          <div className="floating-square" />
          <div className="floating-line" />
        </div>
        <div className="hero-content">
          <h1>Less is More</h1>
          <p className="subtitle">Minimalist Design Studio</p>
          <a href="#about" className="cta-button">EXPLORE</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-intro fade-in">
            <div className="quote-block">
              <span className="quote-mark">"</span>
              <h3>
                Perfection is achieved not when there is nothing more to add,
                but when there is nothing left to take away.
              </h3>
              <div className="quote-author">
                <span className="author-line" />
                <p>Antoine de Saint-Exupéry</p>
              </div>
            </div>
          </div>
          <div className="black-line" />

          <div className="stats-grid fade-in">
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Possibilities</div>
            </div>
          </div>

          <div className="philosophy-section fade-in">
            <div className="philosophy-header">
              <h2>Philosophy</h2>
            </div>
            <div className="philosophy-content">
              <div className="philosophy-main">
                <p className="lead-text">
                  We believe in the power of reduction. Every line, every space,
                  every element serves a purpose in our pursuit of essential beauty.
                </p>
              </div>
              <div className="philosophy-points">
                <div className="point-item">
                  <span className="point-number">01</span>
                  <h4>Clarity First</h4>
                  <p>Strip away complexity to reveal truth</p>
                </div>
                <div className="point-item">
                  <span className="point-number">02</span>
                  <h4>Space to Breathe</h4>
                  <p>Let design elements have room to speak</p>
                </div>
                <div className="point-item">
                  <span className="point-number">03</span>
                  <h4>Intentional Choices</h4>
                  <p>Every decision has meaning and purpose</p>
                </div>
              </div>
            </div>
          </div>

          <div className="process-timeline fade-in">
            <h2 className="section-subtitle">Our Process</h2>
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>Discover</h4>
                  <p>Understanding your essence</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>Reduce</h4>
                  <p>Removing the unnecessary</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>Refine</h4>
                  <p>Perfecting every detail</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>Deliver</h4>
                  <p>Bringing vision to life</p>
                </div>
              </div>
            </div>
          </div>

          <div className="values-section fade-in">
            <div className="values-header">
              <h2>Core Values</h2>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">—</div>
                <h4>Minimalism</h4>
              </div>
              <div className="value-card black">
                <div className="value-icon">+</div>
                <h4>Innovation</h4>
              </div>
              <div className="value-card black">
                <div className="value-icon">○</div>
                <h4>Precision</h4>
              </div>
              <div className="value-card">
                <div className="value-icon">□</div>
                <h4>Balance</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="services-header fade-in">
            <h2>What We Do</h2>
          </div>

          <div className="asymmetric-grid fade-in">
            <div className="service-large">
              <h3>Brand Identity</h3>
              <p>
                Creating distinctive visual languages that communicate your essence
                through simplicity.
              </p>
              <a href="#contact" className="service-tag">View Work</a>
            </div>
            <div className="service-small">
              <div className="service-number">01</div>
              <h4>Strategy First</h4>
            </div>
          </div>

          <div className="asymmetric-grid reverse fade-in">
            <div className="service-small">
              <div className="service-number">02</div>
              <h4>Digital Native</h4>
            </div>
            <div className="service-large">
              <h3>Web Design</h3>
              <p>
                Crafting digital experiences that prioritize clarity and usability.
              </p>
              <a href="#contact" className="service-tag">Explore</a>
            </div>
          </div>

          <div className="asymmetric-grid fade-in">
            <div className="service-large">
              <h3>Art Direction</h3>
              <p>
                Guiding visual narratives with restraint and intention.
              </p>
              <a href="#contact" className="service-tag">Discover</a>
            </div>
            <div className="service-small">
              <div className="service-number">03</div>
              <h4>Vision Focused</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-grid fade-in">
            <div className="contact-info">
              <h2>Connect</h2>
              <div className="info-item">
                <h4>Email</h4>
                <p>hello@minimal.com</p>
              </div>
              <div className="info-item">
                <h4>Phone</h4>
                <p>+1 234 567 890</p>
              </div>
              <div className="info-item">
                <h4>Location</h4>
                <p>New York, NY</p>
              </div>
            </div>

            <div className="contact-divider" />

            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder=" " required />
                  <label>Name</label>
                </div>
                <div className="form-group">
                  <input type="email" placeholder=" " required />
                  <label>Email</label>
                </div>
                <div className="form-group">
                  <textarea rows={4} placeholder=" " required />
                  <label>Message</label>
                </div>
                <button type="submit" className="submit-btn">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2025 Minimal Studio — Designed by{" "}
          <a href="https://www.tooplate.com" target="_blank" rel="nofollow noopener" style={{ fontWeight: 700 }}>
            Tooplate
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
