import photo from "./assets/photoweslay.jpg";
import Button from "./Button";
const PROJECTS = [
  {
    id: "01",
    name: "Site Web Responsive",
    desc: "Développement d'un site web responsive conçu avec HTML, CSS et JavaScript.",
    tools: ["HTML", "JavaScript", "CSS",],
    repo: "https://weslay007.github.io/SITE-WM-MULTI-SERVICES/",
  },
  {
    id: "02",
    name: "Weather Dashboard",
    desc: "Application météo qui affiche les conditions météorologiques en temps réel à partir du nom d'une ville en utilisant l'API Open-Meteo.",
    tools: ["HTML", "JavaScript", "Open-Meteo API", "CSS"],
    repo: "https://weslay007.github.io/Devoir2_INF3500_OLIW/",
  },
  {
    id: "03",
    name: "illustration d'un projet artistique",
    image: "/src/assets/illustration.png",
    desc: "Créer une scène visuelle émotionnelle mélangeant architecture ancienne et environnement naturel.",
    tools: ["Canva"],
    repo: "https://canva.link/n964udgqmtp8cti",
  },
];

const SKILLS = [
  { group: "Développement Web",
    items: ["HTML", "CSS", "JavaScript", "React", "Vite"], 

  },
  { group: "UI/UX Design", 
    items: ["Figma", "Canva"],
  },  
  { group: "Design Graphique",
    items: ["Canva", "Adobe Photoshop"],
  },
  
  { group: "Outils", items: ["Git", "GitHub", "VS Code", "Figma", "Canva"] },
];

function NavBar() {
  return (
    <header className="nav">
      <nav className="nav__links">
        <a href="#top">Accueil</a>
        <a href="#skills">Mes compétences</a>
        <a href="#projects">Mes Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__text">
        <p className="hero__script">Bienvenue sur mon</p>
        <h1 className="hero__title">PORTFOLIO</h1>
        <p className="hero__subtitle">
          UI/UX Designer & Graphic Designer — Développement Web - Je suis étudiant et passionné par le design. 
          Je me spécialise en UI/UX Design et en Design Graphique, 
          et J'aime concevoir des interfaces simples, faciles à utiliser et aussi créer des visuels modernes qui donnent vie aux idées.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            Voir mes Projets
          </a>
          <a className="btn btn--ghost" href="#contact">
            Me contacter
          </a>
        </div>
      </div>

      <div className="hero__portrait">
        <div className="portrait-frame">
          <img src={photo} alt="Portrait de OLIBRICE Weslay" />
        </div>
        <p className="hero__name">
          OLIBRICE <span className="hero__name-first">Weslay</span>
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <h2 className="section__title">À propos de moi</h2>
      <p className="about__text">
        En 2024, j'ai terminé mes études classiques à l'institution Espoir Pour Haiti. Depuis longtemps, je suis passionné par l'informatique. C'est cette passion qui m'a poussé à intégrer une école professionnelle afin d'acquérir des compétences en bureautique.

Au cours de cette formation, j'ai appris à maîtriser des outils tels que Microsoft Word, Excel et PowerPoint.

En 2025, j'ai eu l'opportunité de rejoindre l'ISTEAH. C'est là que j'ai commencé à approfondir mes connaissances en informatique et à développer mes compétences dans plusieurs autres domaines tels que le UI/UX Design, le Design Graphique et le développement web.

      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2 className="section__title">Mes Compétences</h2>
      <div className="skills__grid">
        {SKILLS.map((group) => (
          <div className="skills__card" key={group.group}>
            <h3 className="skills__card-title">{group.group}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item} className="skills__tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projets</h2>
      <div className="projects__grid">
        {PROJECTS.map((p) => (
          <article className="project-card" key={p.id}>
            <span className="project-card__id">{p.id}</span>
            <h3 className="project-card__name">{p.name}</h3>
            <p className="project-card__desc">{p.desc}</p>
            <ul className="project-card__stack">
              {p.tools?.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="project-card__links">
              <a href={p.repo}>Code source →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section__title">Contact</h2>
      <p className="contact__text">
        Pour une offre ou une idée de projet, laisser un message.
      </p>
      <div className="contact__links">
        <a href="mailto:olibriceweslay@gmail.com">olibriceweslay@gmail.com</a>
        <a href="tel:+50932050142">Téléphone: +(509) 3205-01-42</a>
        
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} OLIBRICE Weslay -Vous pouvez me contacter. Construit avec React.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}