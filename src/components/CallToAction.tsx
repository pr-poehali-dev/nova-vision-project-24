import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

export function CallToAction() {
  return (
    <section id="contact" className="py-20 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Связаться с нами</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Найдём дом
            <br />
            вашей <HighlightedText>мечты</HighlightedText>
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Оставьте заявку — и риелтор <span className="text-[rgb(56,135,255)] font-medium">Титан</span> подберёт квартиру под ваш бюджет и пожелания. Консультация бесплатна.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79790667090"
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group"
            >Позвонить для консультации</a>
            <a
              href="tel:+79790667090"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              +7 (979) 066-70-90
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}