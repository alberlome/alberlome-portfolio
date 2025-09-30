export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
          </div>
          <div className="lg:col-span-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Sobre mí</h2>
              <div className="flex justify-center mb-6">
                <img src="me.jpg" width="200px" height="100px"  className="rounded-full w-56 h-56 overflow-hidden"></img>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un <strong>Senior Frontend Developer</strong> con más de <strong>15 años de experiencia en IT</strong>, donde he combinado experticia técnica avanzada con <strong>liderazgo de equipos y visión estratégica de producto.</strong>
              </p><br></br><p className="text-lg text-muted-foreground leading-relaxed">
              Mi enfoque es <strong>crear productos digitales de alto impacto</strong> que optimizan procesos clave de negocio y son usados masivamente. He construido soluciones desde cero, <strong>guiando a desarrolladores jóvenes a roles senior</strong> a través de un liderazgo técnico mayéutico. Mi trabajo ha sido reconocido, incluyendo una <strong>mención de Gartner a una de las aplicaciones que desarrollé.</strong></p>
              <br></br>
              <p className="text-lg text-muted-foreground leading-relaxed">
Busco construir equipos sostenibles y tomar decisiones técnicas que se alineen directamente con el valor real del negocio.</p>
<br></br>
<p className="text-lg text-muted-foreground leading-relaxed">
<strong>Stack clave:</strong> Angular, React, Vue.js, Next.js, TypeScript, Node.js, Monolitos, Arquitectura Hexagonal/Microservicios, Docker/Kubernetes, CI/CD, y metodologías ágiles (Scrum/OKRs).</p>
<br></br>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
