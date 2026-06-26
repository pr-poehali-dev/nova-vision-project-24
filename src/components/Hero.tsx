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
          {/* дымка — радиальный градиент, плавно растворяется по краям */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 90% at 50% 50%, rgba(20,14,8,0.68) 0%, rgba(20,14,8,0.38) 55%, transparent 100%)',
              filter: 'blur(20px)',
              transform: 'scale(1.2)',
            }}
          />
          <p className="relative text-sm tracking-[0.4em] uppercase text-amber-200/80 mb-6 font-light">Агентство недвижимости</p>
          <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[0.95] drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]">
            Ваш дом
            <br />
            <span className="text-amber-100">в Крыму</span>
          </h1>
          <p className="relative mt-8 text-lg text-stone-200/90 max-w-md mx-auto font-light">Подберём лучшую недвижимость с полным сопровождением сделки</p>
          <a
            href="#contact"
            className="relative inline-block mt-10 px-8 py-4 bg-amber-400/20 border border-amber-300/50 text-amber-100 font-medium text-sm hover:bg-amber-300/30 hover:border-amber-200 transition-all duration-300 backdrop-blur-sm"
          >
            Подобрать жильё
          </a>
        </div>
      </div>
    </section>
  )
}