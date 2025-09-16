import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Heart } from "lucide-react"

const stats = [
  { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
  { icon: Award, value: "50+", label: "Projetos Concluídos" },
  { icon: Clock, value: "5+", label: "Anos de Experiência" },
  { icon: Heart, value: "99%", label: "Taxa de Satisfação" },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Sobre Nossa Empresa</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos uma equipe apaixonada por tecnologia e design, dedicada a criar experiências digitais excepcionais.
              Nossa missão é transformar ideias em soluções inovadoras que geram resultados reais.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com anos de experiência no mercado, combinamos criatividade, tecnologia de ponta e estratégia para
              entregar projetos que superam expectativas e impulsionam o crescimento dos nossos clientes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                        <stat.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl overflow-hidden">
              <img
                src="/modern-office-team-working-on-computers.jpg"
                alt="Nossa equipe trabalhando"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center">
              <Heart className="h-12 w-12 text-secondary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
