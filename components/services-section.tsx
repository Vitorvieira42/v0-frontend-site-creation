import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Smartphone, Globe, Palette, Code } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Criamos sites e aplicações web modernas com as melhores tecnologias do mercado.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Interfaces que se adaptam perfeitamente a qualquer dispositivo e tamanho de tela.",
  },
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Sites ultra-rápidos com carregamento otimizado e experiência fluida.",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Proteção completa com as melhores práticas de segurança digital.",
  },
  {
    icon: Palette,
    title: "Design Personalizado",
    description: "Identidade visual única que reflete a essência da sua marca.",
  },
  {
    icon: Globe,
    title: "SEO Otimizado",
    description: "Visibilidade máxima nos mecanismos de busca para alcançar mais clientes.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos soluções completas para transformar sua presença digital e impulsionar seu negócio para o próximo
            nível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
