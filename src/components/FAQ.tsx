import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких городах Крыма вы работаете?",
    answer:
      "Мы работаем по всему полуострову: Ялта, Алушта, Севастополь, Симферополь, Евпатория и другие города. Поможем подобрать жильё в любом районе под ваши задачи и бюджет.",
  },
  {
    question: "Сколько стоят ваши услуги?",
    answer:
      "Первичная консультация и подбор вариантов — бесплатны. Размер комиссии зависит от типа сделки и обсуждается заранее, без скрытых платежей. Все условия мы фиксируем в договоре.",
  },
  {
    question: "Проверяете ли вы юридическую чистоту квартиры?",
    answer:
      "Да, это обязательный этап каждой сделки. Мы проверяем историю объекта, отсутствие обременений и долгов, корректность документов, чтобы вы были полностью защищены.",
  },
  {
    question: "Помогаете ли с ипотекой?",
    answer:
      "Конечно. Мы сотрудничаем с банками и поможем подобрать выгодную ипотечную программу, собрать документы и сопроводим вас вплоть до одобрения и выхода на сделку.",
  },
  {
    question: "Можно ли купить квартиру удалённо?",
    answer:
      "Да. Мы проводим онлайн-показы, видеосвязь с объекта и помогаем оформить сделку дистанционно. Многие клиенты из других регионов покупают жильё в Крыму не приезжая лично.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Оставьте заявку или позвоните нам — мы обсудим ваши пожелания, бюджет и сроки. Уже на первой консультации подберём несколько подходящих вариантов.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}