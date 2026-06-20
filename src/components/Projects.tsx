import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "2-комнатная с видом на море",
    category: "68 м² · 2 комнаты",
    location: "Ялта, ул. Набережная",
    year: "12 500 000 ₽",
    image: "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/files/a7ec8b9a-22c2-4939-bd88-dbd601dc0dc2.jpg",
  },
  {
    id: 2,
    title: "Светлая квартира-студия",
    category: "42 м² · студия",
    location: "Севастополь, центр",
    year: "7 900 000 ₽",
    image: "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/files/ffcc09bb-4d4c-43b2-a1b6-3f1889949d16.jpg",
  },
  {
    id: 3,
    title: "Уютная спальня у моря",
    category: "54 м² · 1 комната",
    location: "Алушта, новый ЖК",
    year: "9 300 000 ₽",
    image: "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/files/f585a71d-96fa-445a-be84-5635e49e9447.jpg",
  },
  {
    id: 4,
    title: "Квартира в новостройке",
    category: "85 м² · 3 комнаты",
    location: "Симферополь, ул. Гагарина",
    year: "11 200 000 ₽",
    image: "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/files/9e9b4568-543d-45a5-9aaf-e92a6663f11e.jpg",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Каталог</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Объекты в продаже</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все объекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-accent text-sm font-semibold whitespace-nowrap">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}