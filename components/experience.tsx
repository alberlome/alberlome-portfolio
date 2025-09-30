const experiences = [
  {
    period: "2023 — 2025",
    title: "Senior Frontend Developer",
    company: "Nexum",
    description:
      "Lidero un equipo multicultural de 4 personas. Desarrollo de la experiencia UX/UI, navegación del sitemap, roadmap e historias de usuario, siguiendo metodologías ágiles (SCRUM). Desarrollo de componentes UI críticos y sistemas de diseño. Implemento mejores prácticas de accesibilidad y rendimiento.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Storybook", "SCRUM","Cypress", "Playwright","BrowserStack"],
  },
  {
    period: "2022 — 2023",
    title: "Software Engineering Manager",
    company: "Geograma",
    description:
      "Lideré equipos ágiles como SCRUM Master, gestionando los proyectos de desarrollo desde hablar con clientes y stakeholders, a crear roadmaps, elaborar las historias de usuario en el backlog, mentorizar desarrolladores, diseñar interfaces (UX/UI). Revisión de Pull Request, aplicando principios SOLID y Clean Code. Incentivar el escribir la documentación en Confluence. Reducir la rotación de empleados en el equipo.",
    technologies: ["Vue.js", "Angular", "React", "JavaScript", "TypeScript", "SASS", "LESS", "CSS", "Webpack", "NPM", "Node.js", "Agile", "SCRUM", "KANBAN", "AWS", "CodeCommit", "CodeBuild", "HotJar", "Cypress"],
  },
  {
    period: "2018 — 2021",
    title: "Software Team Leader | Senior Frontend Developer",
    company: "Anjana Data",
    description:
      "Construí una aplicación de Gobierno del Dato diseñando todo frontend desde cero, implementando arquitectura escalable y experiencias de usuario modernas. Lideré un equipo de 5 personas (reuniones 1:1, entrevistas, feedback...). Conseguir la excelencia en el UX/UI obteniendo así un reconocimiento en Gartner.",
    technologies: ["Angular", "RxJS", "HTML5", "CSS", "MySQL", "JavaScript", "TypeScript", "BEM", "SCRUM", "JIRA", "Confluence", "Figma", "Liderazgo"],
  },
    {
    period: "2017 — 2018",
    title: "Senior Frontend Developer",
    company: "Tilo Motion",
    description:
      "Construí dos productos digitales y varias webs relacionadas con el mundo del motor.Liderar y facilitar la comunicación entre los departamentos de diseño, desarrollo y marketing. Ayudar a los diseñadores y desarrolladores a mejorar sus flujos de trabajo, potenciando sus habilidades. Mantenimiento de servidores y asegurar el cumplimiento de los estandares de seguridad.",
    technologies: ["Angular", "RxJS", "HTML5", "CSS", "MySQL", "JavaScript", "TypeScript", "BEM", "SCRUM", "JIRA", "Confluence", "Figma", "Liderazgo"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experiencia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 10 años construyendo experiencias web excepcionales y liderando equipos de desarrollo.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4">
                  <p className="text-sm text-primary font-medium uppercase tracking-wider">{exp.period}</p>
                </div>
                <div className="lg:w-3/4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-0 lg:left-1/4 top-16 w-px h-12 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
