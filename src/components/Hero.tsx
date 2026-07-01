export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/bucket/5a47c4c5-734b-4aa7-8be7-6e17e6087a53.jpg"
          alt="ЖК Лучистое Алушта — Титан Недвижимость"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/55 via-sky-900/20 to-sky-950/68" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
        <div className="relative inline-flex flex-col items-center px-6 sm:px-12 md:px-16 py-10 sm:py-12">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 85% at 50% 50%, rgba(3,18,45,0.40) 0%, rgba(3,18,45,0.14) 60%, transparent 100%)',
              filter: 'blur(32px)',
              transform: 'scale(1.35)',
            }}
          />
          <p className="relative text-xs sm:text-sm tracking-[0.35em] sm:tracking-[0.45em] uppercase text-sky-200/75 mb-5 sm:mb-6 font-light">
            <span className="text-sky-300 font-semibold">Титан</span> · Агентство недвижимости Крыма
          </p>
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight leading-[1.05] drop-shadow-[0_3px_28px_rgba(0,0,0,0.55)]">
            Ваш дом
            <br />
            <span className="font-semibold text-sky-200">в Крыму</span>
          </h1>
          <p className="relative mt-5 sm:mt-7 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md mx-auto font-light text-white/80 leading-relaxed">
            Титан подберёт лучшую недвижимость с полным сопровождением сделки
          </p>
          <a
            href="#contact"
            className="relative inline-block mt-7 sm:mt-9 px-7 sm:px-8 py-3 sm:py-4 bg-sky-500/20 border border-sky-300/40 text-sky-100 font-medium text-xs sm:text-sm tracking-widest hover:bg-sky-400/28 hover:border-sky-200/65 transition-all duration-300 backdrop-blur-sm"
          >
            Подобрать жильё
          </a>
        </div>
      </div>
    </section>
  )
}
