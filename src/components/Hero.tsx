export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/bucket/20704955-b0f2-488a-85f7-61271aa8c76b.jpg"
          alt="Титан Недвижимость — вечерний вид"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <p className="text-sm tracking-[0.4em] uppercase text-cyan-300/80 mb-6 font-light">Агентство недвижимости</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[0.95] drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)]">
          Ваш дом
          <br />
          <span className="text-cyan-200">в Крыму</span>
        </h1>
        <p className="mt-8 text-lg text-slate-300/90 max-w-md mx-auto font-light drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">Подберём лучшую недвижимость с полным сопровождением сделки</p>
        <a
          href="#contact"
          className="inline-block mt-10 px-8 py-4 bg-cyan-400/20 border border-cyan-300/50 text-cyan-100 font-medium text-sm hover:bg-cyan-300/30 hover:border-cyan-200 transition-all duration-300 backdrop-blur-sm"
        >
          Подобрать жильё
        </a>
      </div>
    </section>
  )
}