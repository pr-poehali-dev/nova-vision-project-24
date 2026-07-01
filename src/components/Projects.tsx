import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Алушта, квартиры у моря",
    category: "от 30 м² · 1–4 к. · первая линия",
    location: "Алушта",
    price: "от 9 400 000 ₽",
    images: [
      "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/bucket/b2b06e62-7d43-4990-abc3-548a5585c99e.jpg",
    ],
  },
  {
    id: 2,
    title: "ЖК бизнес-класса, Симферополь",
    category: "от 39 м² · 1–3 к. · центр города",
    location: "Симферополь",
    price: "от 8 700 000 ₽",
    images: [
      "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/bucket/2dfd2107-85b0-4fb5-a8fb-12a1620c1d79.jpg",
    ],
  },
  {
    id: 3,
    title: "Курортный клуб, Алушта",
    category: "от 56 м² · 1–3 к.",
    location: "Алушта",
    price: "от 10 900 000 ₽",
    images: [
      "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/bucket/9c45f01c-5ff9-4851-bf40-b0bf7245d907.jpeg",
    ],
  },
  {
    id: 4,
    title: "Современные комплексы для жизни",
    category: "Новые районы",
    location: "Крым",
    price: "от 4 900 000 ₽",
    images: [
      "https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/bucket/5ec70876-b695-4b8f-a951-f51389703719.jpg",
    ],
  },
]

function ProjectCard({ project, index, revealedImages, imageRef }: {
  project: typeof projects[0]
  index: number
  revealedImages: Set<number>
  imageRef: (el: HTMLDivElement | null) => void
}) {
  const [activeImg, setActiveImg] = useState(0)
  const [hovered, setHovered] = useState(false)
  const hasMultiple = project.images.length > 1

  useEffect(() => {
    if (!hasMultiple || !hovered) return
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % project.images.length)
    }, 1800)
    return () => clearInterval(timer)
  }, [hovered, hasMultiple, project.images.length])

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActiveImg(0) }}
    >
      <div ref={imageRef} className="relative overflow-hidden aspect-[4/3] mb-6">
        {project.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${project.title} ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              i === activeImg ? "opacity-100 scale-105" : "opacity-0 scale-100"
            } ${i === 0 && activeImg === 0 && !hovered ? "scale-100" : ""}`}
          />
        ))}
        {hasMultiple && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, i) => (
              <span
                key={i}
                className={`block h-1 rounded-full transition-all duration-300 ${
                  i === activeImg ? "w-5 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
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
        <span className="text-accent text-sm font-semibold whitespace-nowrap">{project.price}</span>
      </div>
    </article>
  )
}

export function Projects() {
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
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              revealedImages={revealedImages}
              imageRef={(el) => { imageRefs.current[index] = el }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}