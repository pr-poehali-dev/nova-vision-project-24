import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const agents = [
  {
    name: "Анна Соколова",
    role: "Руководитель отдела продаж",
    experience: "12 лет на рынке Крыма",
    phone: "+7 (978) 000-00-01",
    image: "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/files/9c9da91b-f023-4ad7-ba40-544af7fd6786.jpg",
  },
  {
    name: "Дмитрий Орлов",
    role: "Эксперт по новостройкам",
    experience: "8 лет в недвижимости",
    phone: "+7 (978) 000-00-02",
    image: "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/files/0a9e52dd-2f4d-4b2a-9e02-c9a941676c83.jpg",
  },
  {
    name: "Мария Левина",
    role: "Специалист по аренде",
    experience: "6 лет с клиентами",
    phone: "+7 (978) 000-00-03",
    image: "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/files/520308a8-7cb1-42bc-8af3-53fdae9a3d0b.jpg",
  },
]

export function Team() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="team" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Команда</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-6 text-balance">
            Наши риелторы
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Опытные специалисты, которые знают Крым и помогут вам на каждом этапе сделки.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div
              key={agent.name}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`group bg-card rounded-sm overflow-hidden border border-border transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1">{agent.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{agent.role}</p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Icon name="Award" size={16} />
                  {agent.experience}
                </div>
                <a
                  href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-2 text-foreground text-sm hover:text-accent transition-colors"
                >
                  <Icon name="Phone" size={16} />
                  {agent.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
