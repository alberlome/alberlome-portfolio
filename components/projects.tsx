import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "LeadCars",
    description:
      "Plataforma de gestión de leads de automoción.",
    image: "/leadcars.jpg",
    technologies: ["JavaScript", "JQuery", "CSS3", "Bootstrap", "Three.js", "PHP", "PostgreSQL", "Zapier", "Asterisk", "Hubspot", "Sketch"],
    liveUrl: "https://www.leadcars.es/"
  },
  {
    title: "Anjana Data",
    description: "Plataforma de Gobierno del Dato & Analytics",
    image: "/anjana-data.jpg",
    technologies: ["Angular", "CSS", "TypeScript", "Three.js", "Material UI", "MySQL", "Java", "Swagger", "Postman", "Figma"],
    liveUrl: "https://anjanadata.com/"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo frontend y liderazgo técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
