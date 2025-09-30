import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Target, Zap } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Desarrollo de componentes y aplicaciones web modernas con cualquier framework de JavaScript o TypeScript. Angular, Vue.js, React, Next.js, RxJS y las últimas tecnologías frontend.",
    features: ["Desarrollos a medida", "React & Next.js", "Vercel", "TypeScript", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Users,
    title: "SCRUM Master",
    description: "Facilito procesos ágiles, elimino impedimentos y ayudo a los equipos a alcanzar su máximo potencial.",
    features: ["Metodologías Ágiles", "Facilitación de Ceremonias", "Coaching de Equipos", "Mejora Continua", "Sprint Planning", "Dailys", "Retrospectives"],
  },
  {
    icon: Target,
    title: "Team Leadership",
    description: "Lidero equipos técnicos, defino arquitecturas y establezco mejores prácticas de desarrollo según el SDLC.",
    features: ["Liderazgo Técnico", "Mentoring", "Code Reviews", "Principios SOLID", "Clean Code", "Arquitectura Hexagonal"],
  },
  {
    icon: Zap,
    title: "Consultoría Técnica",
    description: "Auditorías de código, optimización de rendimiento, consultoría en arquitectura y seguridad informática.",
    features: ["Auditorías de Código (Cobertura de código, rendimiento, bugs)", "Análisis, Optimización y Seguridad de tu web", "Arquitectura del Software", "Ciberseguridad", "Análisis SEO", "Desarrollo de MCP (Model Context Protocol) a medida"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Servicios Freelance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrezco servicios especializados para ayudar a tu equipo y proyecto a alcanzar sus objetivos técnicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">¿Interesado en trabajar juntos? Hablemos sobre tu proyecto.</p>
          <a
            href="mailto:alberlome@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contactar ahora
          </a>
        </div>
      </div>
    </section>
  )
}
