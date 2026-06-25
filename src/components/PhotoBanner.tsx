export function PhotoBanner() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <img
        src="https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/bucket/5ec70876-b695-4b8f-a951-f51389703719.jpg"
        alt="Недвижимость у моря в Крыму"
        className="w-full h-full object-cover object-center"
        style={{ objectPosition: '50% 40%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4 font-light">Крым · Недвижимость у моря</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight max-w-lg drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]">
            Жизнь там,<br />где хочется
          </h2>
          <a
            href="#contact"
            className="inline-block mt-8 px-7 py-3 border border-white/50 text-white text-sm tracking-[0.15em] uppercase font-light hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Подобрать жильё
          </a>
        </div>
      </div>
    </section>
  )
}
