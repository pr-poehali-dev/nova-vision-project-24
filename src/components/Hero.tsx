export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/bucket/fb2636e1-f550-4c7b-9843-387afe1e35a5.jpg"
          alt="Титан Недвижимость — вечерний вид"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">

        {/* Надпись сверху — прижата к логотипу */}
        <p
          className="tracking-[0.35em] uppercase text-cyan-300/80 font-light drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
          style={{
            fontSize: 'clamp(9px, 2.2vw, 13px)',
            marginBottom: 'clamp(4px, 1.2vw, 10px)',
          }}
        >
          Агентство недвижимости
        </p>

        {/* Блок совпадает с квадратом логотипа на фото */}
        <div
          className="flex flex-col items-center justify-end"
          style={{
            width: 'clamp(260px, 58vw, 440px)',
            height: 'clamp(260px, 58vw, 440px)',
          }}
        >
          {/* Кнопка между двумя белыми полосами */}
          <a
            href="#contact"
            className="bg-cyan-400/20 border border-cyan-300/50 text-cyan-100 font-medium uppercase tracking-[0.15em] hover:bg-cyan-300/30 hover:border-cyan-200 transition-all duration-300 backdrop-blur-sm"
            style={{
              fontSize: 'clamp(10px, 2.4vw, 14px)',
              padding: 'clamp(8px, 1.8vw, 14px) clamp(18px, 5vw, 36px)',
              marginBottom: 'clamp(22px, 7vw, 52px)',
            }}
          >
            Подобрать жильё
          </a>
        </div>

        {/* Подпись снизу — прижата к логотипу */}
        <p
          className="text-slate-300/90 font-light tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] text-center px-4"
          style={{
            fontSize: 'clamp(9px, 2.2vw, 13px)',
            marginTop: 'clamp(4px, 1.2vw, 10px)',
            maxWidth: 'clamp(200px, 50vw, 360px)',
          }}
        >
          Подберём лучшую недвижимость с полным сопровождением сделки
        </p>

      </div>
    </section>
  )
}
