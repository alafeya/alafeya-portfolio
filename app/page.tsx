"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Mail, Github, Linkedin, Instagram, Moon, Sun } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "WellNessConnect",
    type: "FULL-STACK WEB APPLICATION",
    description:
      "A wellness community platform with authentication, forums, resources, personal dashboards and admin analytics.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    href: "https://github.com/alafeya/WellNessConnect",
    live: "https://wellnessconnect-ui.onrender.com/",
  },
  {
    number: "02",
    name: "Student Management System",
    type: "WEB APPLICATION",
    description:
      "A student-and-teacher platform for assignments, submissions, feedback, progress tracking and extension requests.",
    stack: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    href: "https://github.com/alafeya/StrangerStringss",
  },
  {
    number: "03",
    name: "Voice Pet",
    type: "INTERACTIVE WEB EXPERIMENT",
    description:
      "A voice-led interactive pet experience, built as a lightweight React application.",
    stack: ["React", "Vite", "JavaScript"],
    href: "https://github.com/alafeya/voice-pet",
    live: "https://alafeya.github.io/voice-pet/",
  },
  {
    number: "04",
    name: "Kabir Portfolio",
    type: "PERSONAL WEBSITE / PORTFOLIO BUILD",
    description:
      "A deployed portfolio website showcasing a Next.js-based visual and interaction approach.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    href: "https://github.com/alafeya/kabir-portfolio",
    live: "https://kabirkeswani.vercel.app/",
  },
  {
    number: "05",
    name: "College Canteen Ordering",
    type: "DESKTOP APPLICATION",
    description:
      "A Java GUI application for college canteen menu selection, billing and order tracking.",
    stack: ["Java", "GUI"],
    href: "https://github.com/alafeya/College-Canteen-Order-Management",
  },
];

const skills = [
  {
    label: "FRONTEND",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    label: "BACKEND",
    items: ["Node.js", "Express.js", ".NET", "Java", "PHP"]
  },
  {
    label: "DATABASES",
    items: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    label: "LANGUAGES",
    items: ["Python", "C++", "Java", "JavaScript", "PHP", "C#"]
  },
  {
    label: "TOOLS & ECOSYSTEM",
    items: ["Maven", "Git", "GitHub", "Docker", "Postman", "REST APIs"]
  }
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const updateScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 420);
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main className={`page-shell ${dark ? "dark-theme" : ""}`}>
      <div className="reading-progress" style={{ width: `${scrollProgress}%` }} />
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Alafeya Qaiser home">AQ<span>®</span></a>
        <span className="topbar-note">INDEPENDENT DEVELOPER / INDIA</span>
        <div className="topbar-actions">
          <a className="availability" href="mailto:aafiahmad12@gmail.com">
            <span className="availability-dot" /> AVAILABLE FOR FREELANCE
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <button className="portrait-panel portrait-trigger" type="button" onClick={() => setShowAbout(true)} aria-label="Open about me summary">
          <Image
            src="/portrait-cutout.png"
            alt="Alafeya Qaiser"
            width={700}
            height={390}
            priority
            className="portrait"
          />
          <span className="portrait-label">ABOUT ME <ArrowDownRight size={14} /></span>
          <span className="portrait-hint">CLICK TO OPEN</span>
        </button>

        <div className="intro-panel">
          <p className="eyebrow">DEVELOPER · CREATIVE THINKER · DIGITAL MAKER</p>
          <h1>ALAFEYA<br />QAISER<span className="period">.</span></h1>
          <p className="intro-copy">
            I build thoughtful digital experiences — bringing together functional development,
            clean interfaces and a little bit of creative curiosity.
          </p>
          <div className="hero-links">
            <a href="#work" className="text-link">EXPLORE SELECTED WORK <ArrowUpRight size={15} /></a>
            <a href="mailto:aafiahmad12@gmail.com" className="text-link">LET’S TALK <ArrowUpRight size={15} /></a>
          </div>
          <div className="side-index">PORTFOLIO / 2026</div>
        </div>
      </section>

      <section className="info-grid reveal" aria-label="Profile information">
        <div className="info-block">
          <h2>ABOUT</h2>
          <p>
            A computer science student interested in building useful products, exploring
            emerging technology and making the digital feel a little more human.
          </p>
        </div>
        <div className="info-block">
          <h2>EXPERIENCE</h2>
          <p><strong>Azisly AI</strong><br />Business Planning Intern</p>
        </div>
        <div className="info-block">
          <h2>EDUCATION</h2>
          <p><strong>B.Tech — Computer Science & Engineering</strong><br />Lovely Professional University<br />2023 — Present</p>
        </div>
        <div className="info-block">
          <h2>FOCUS</h2>
          <p>Frontend development<br />Full-stack applications<br />Creative technology</p>
        </div>
      </section>

      <section className="work-section reveal" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW THINGS I’VE WORKED ON</p>
            <h2>SELECTED WORK<span className="period">.</span></h2>
          </div>
          <span className="section-count">( 03 PROJECTS )</span>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <div className="project-row reveal" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <span className="project-actions">
                {project.live && (
                  <a className="live-link" href={project.live} target="_blank" rel="noreferrer">
                    VIEW LIVE <ArrowUpRight size={13} />
                  </a>
                )}
                <a className="project-arrow" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source on GitHub`}>
                  <Github size={18} />
                </a>
              </span>
            </div>
          ))}
        </div>
        <a className="all-work" href="https://github.com/alafeya?tab=repositories" target="_blank" rel="noreferrer">
          VIEW ALL REPOSITORIES <ArrowUpRight size={15} />
        </a>
      </section>

      <section className="skills-section reveal">
        <div>
          <p className="eyebrow">THE TOOLBOX</p>
          <h2>TOOLS &<br />TECHNOLOGIES<span className="period">.</span></h2>
        </div>
      <div className="skill-groups">
  {skills.map((group) => (
    <div className="skill-group" key={group.label}>
      <span className="skill-group-label">{group.label}</span>

      <div className="skills-list">
        {group.items.map((skill) => (
          <span key={`${group.label}-${skill}`}>{skill}</span>
        ))}
      </div>
    </div>
  ))}
</div>
      </section>

      <footer className="footer reveal" id="contact">
        <div className="footer-top">
          <div>
            <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
            <h2>LET’S MAKE<br />IT HAPPEN<span className="period">.</span></h2>
          </div>
          <a className="contact-circle" href="mailto:aafiahmad12@gmail.com" aria-label="Email Alafeya">
            <Mail size={27} />
          </a>
        </div>
        <div className="footer-bottom">
          <a href="mailto:aafiahmad12@gmail.com">AAFIAHMAD12@GMAIL.COM</a>
          <div className="social-links">
            <a href="https://github.com/alafeya" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href="https://www.linkedin.com/in/alafeya-qaiser/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="https://www.instagram.com/aafisdiary/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
          </div>
          <span>© 2026 ALAFEYA QAISER</span>
        </div>
      </footer>

      {showAbout && (
        <div className="about-overlay" role="dialog" aria-modal="true" aria-labelledby="about-title" onClick={() => setShowAbout(false)}>
          <div className="about-card" onClick={(event) => event.stopPropagation()}>
            <button className="about-close" type="button" onClick={() => setShowAbout(false)} aria-label="Close about summary">×</button>
            <p className="eyebrow">A LITTLE CONTEXT</p>
            <h2 id="about-title">ABOUT<br />ALAFEYA<span className="period">.</span></h2>
            <p>I’m an art enthusiast and coding enthusiast — curious, creative, and calm by nature. I enjoy exploring the space between technology and expression, and building digital experiences that are both useful and thoughtful.</p>
            <a className="text-link" href="https://www.linkedin.com/in/alafeya-qaiser/" target="_blank" rel="noreferrer">VIEW LINKEDIN PROFILE <ArrowUpRight size={15} /></a>
          </div>
        </div>
      )}

      <div className={`scroll-portrait ${scrolled ? "is-visible" : ""}`} aria-hidden="true">
        <Image src="/portrait-cutout.png" alt="" width={455} height={390} className="scroll-portrait-image" />
        <span>STILL SCROLLING<br /><i>— ALAFEYA</i></span>
      </div>
    </main>
  );
}
