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

      <div className="relative z-10 flex flex-col items-center w-full" style={{ paddingTop: '2vh' }}>

        {/* Надпись сверху — над логотипом */}
        <p className="text-xs sm:text-sm tracking-[0.45em] uppercase text-white/70 font-light mb-[2vw] sm:mb-6 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
          Агентство недвижимости
        </p>

        {/* Пустое пространство — логотип на фото (~40vw квадрат) */}
        <div
          className="flex items-center justify-center"
          style={{ width: 'min(44vw, 420px)', height: 'min(44vw, 420px)' }}
        >
          {/* Кнопка — визуально между двумя белыми полосами под буквами "ТИТАН" */}
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white/10 border border-white/60 text-white font-light text-sm tracking-[0.2em] uppercase hover:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm"
            style={{ marginTop: 'min(20vw, 190px)' }}
          >
            Подобрать жильё
          </a>
        </div>

        {/* Подпись снизу — под логотипом */}
        <p className="text-xs sm:text-sm text-white/65 font-light mt-[2vw] sm:mt-6 tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] text-center max-w-xs sm:max-w-sm px-4">
          Подберём лучшую недвижимость с полным сопровождением сделки
        </p>

      </div>
    </section>
  )
}
