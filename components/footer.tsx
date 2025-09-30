import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Alberlome</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Frontend Developer especializado en crear experiencias web excepcionales y liderar equipos de desarrollo.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">Enlaces</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre mí
              </a>
              <a
                href="#experience"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Experiencia
              </a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Proyectos
              </a>
              <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Servicios
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">Sígueme</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/alberlome"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/alberlome"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:alberto@alberlome.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Alberlome. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
