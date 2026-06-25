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

        {/* Надпись сверху — прилегает к верхнему краю логотипа */}
        <p className="text-xs sm:text-sm tracking-[0.45em] uppercase text-cyan-300/80 font-light drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
          style={{ marginBottom: 'min(1.5vw, 10px)' }}>
          Агентство недвижимости
        </p>

        {/* Блок-заглушка под логотип на фото */}
        <div
          className="flex flex-col items-center justify-end"
          style={{ width: 'min(44vw, 420px)', height: 'min(44vw, 420px)' }}
        >
          {/* Кнопка между двумя белыми полосами — примерно 78% высоты блока */}
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-cyan-400/20 border border-cyan-300/50 text-cyan-100 font-medium text-sm tracking-[0.15em] uppercase hover:bg-cyan-300/30 hover:border-cyan-200 transition-all duration-300 backdrop-blur-sm"
            style={{ marginBottom: 'min(5vw, 44px)' }}
          >
            Подобрать жильё
          </a>
        </div>

        {/* Подпись снизу — прилегает к нижнему краю логотипа */}
        <p className="text-xs sm:text-sm text-slate-300/90 font-light tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] text-center max-w-xs sm:max-w-sm px-4"
          style={{ marginTop: 'min(1.5vw, 10px)' }}>
          Подберём лучшую недвижимость с полным сопровождением сделки
        </p>

      </div>
    </section>
  )
}
