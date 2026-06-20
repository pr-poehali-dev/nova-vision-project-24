export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/files/e8ab9696-6aaa-4407-bbc4-c8d535b727ba.jpg"
          alt="Многоэтажные дома у моря в Крыму"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/50" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-blue-200 mb-6">Агентство недвижимости</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[0.95]">
          Ваш дом
          <br />
          <span className="text-blue-300">в Крыму</span>
        </h1>
        <p className="mt-8 text-lg text-white/70 max-w-md mx-auto">Подберём лучшую недвижимость с полным сопровождением сделки</p>
        <a
          href="#contact"
          className="inline-block mt-10 px-8 py-4 bg-white font-medium text-sm hover:bg-blue-300 hover:text-white transition-colors duration-300 text-slate-900"
        >
          Подобрать жильё
        </a>
      </div>
    </section>
  )
}