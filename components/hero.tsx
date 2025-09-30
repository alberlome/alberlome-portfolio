import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">Alberto David López</h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-medium">Senior Frontend Developer</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <strong>Senior Frontend Developer</strong> con más de 10 años creando productos digitales desde cero, experto en el Ciclo de Desarrollo Seguro (SDLC), líder de equipos remotos con metodologías ágiles (SCRUM) y especialista en la intersección entre UX/UI y desarrollo web.
            </p>
          </div>

          <div className="space-y-6">
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#contact">Trabajemos juntos</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
                <a href="#projects">Ver proyectos</a>
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-4">
              <a
                href="https://github.com/alberlome"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/alberlome"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:alberto@alberlome.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
