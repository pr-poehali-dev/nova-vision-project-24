export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/ba1b6bef-ba3c-401b-b998-3f24ee27942c/bucket/71312df1-38a1-4c19-ad5b-bcb5721d281a.jpg"
          alt="Титан Недвижимость — вид на море"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-800/20 to-stone-900/65" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="relative inline-flex flex-col items-center px-16 py-12">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 75% 85% at 50% 50%, rgba(5,10,25,0.38) 0%, rgba(5,10,25,0.15) 60%, transparent 100%)',
              filter: 'blur(28px)',
              transform: 'scale(1.3)',
            }}
          />
          <p className="text-sm tracking-[0.4em] uppercase text-cyan-300/80 mb-6 font-light">
            <span className="text-[rgb(56,135,255)] font-medium">Титан</span> · Агентство недвижимости Крыма
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[0.95] drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]">
            Ваш дом
            <br />
            <span className="text-cyan-200">в Крыму</span>
          </h1>
          <p className="mt-8 text-lg max-w-md mx-auto font-light text-[#ffffff]">
Титан подберёт лучшую недвижимость с полным сопровождением сделки
          </p>
          <a
            href="#contact"
            className="inline-block mt-10 px-8 py-4 bg-cyan-400/20 border border-cyan-300/50 text-cyan-100 font-medium text-sm hover:bg-cyan-300/30 hover:border-cyan-200 transition-all duration-300 backdrop-blur-sm"
          >
            Подобрать жильё
          </a>
        </div>
      </div>
    </section>
  )
}