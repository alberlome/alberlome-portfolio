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
                Actualmente, soy Senior Frontend Developer. Contribuyo a la creación y
                mantenimiento de componentes UI que potencian plataformas frontend, asegurando que cumplan con los
                estándares de accesibilidad web y mejores prácticas para ofrecer una experiencia de usuario inclusiva.
              </p>
              <br></br>
              <p className="text-muted-foreground leading-relaxed">
                En el pasado, he tenido la oportunidad de desarrollar software en una variedad de entornos — desde{" "}
                <span className="text-accent font-medium">agencias de publicidad</span> y{" "}
                <span className="text-accent font-medium">grandes corporaciones</span> hasta{" "}
                <span className="text-accent font-medium">start-ups</span> y{" "}
                <span className="text-accent font-medium">pequeños estudios de productos digitales</span>.
                Adicionalmente, también he mentorizado{" "}
                <span className="text-accent font-medium">en el ciclo completo del desarrollo web </span>  
                guiando a través de la construcción de aplicaciones web modernas.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                En mi tiempo libre, suelo estar viajando, leyendo y explorando nuevas
                tecnologías y tendencias en el desarrollo, así como creando pequeñas POC para ver en que pueden contribuir esas nuevas herramientas a negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
