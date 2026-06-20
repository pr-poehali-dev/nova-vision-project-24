import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const agents = [
  {
    name: "Александр Бородин",
    role: "Основатель Титан Крым",
    experience: "Более 10 лет в недвижимости",
    phone: "+7 (978) 000-00-01",
    image: "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/bucket/dc9e0d38-5168-42dc-aed1-a2d50376ac7c.jpg",
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
    <section id="team" className="py-20 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Команда</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-6 text-balance">
            Наши риелторы
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Опытные специалисты, которые знают Крым и помогут вам на каждом этапе сделки.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-sm sm:max-w-md gap-8">
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