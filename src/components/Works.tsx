const works = [
  { title: "Фирменный стиль", category: "Брендинг", year: "2024" },
  { title: "Упаковка продукта", category: "Packaging", year: "2024" },
  { title: "Постеры серии", category: "Print", year: "2023" },
  { title: "Айдентика бренда", category: "Брендинг", year: "2023" },
  { title: "Цифровой иллюстрации", category: "Digital", year: "2023" },
  { title: "Типографика", category: "Print", year: "2022" },
];

export function Works() {
  return (
    <section id="works" className="py-32 container mx-auto px-6">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-4xl md:text-5xl font-sentient">
          Избранные <br />
          <i className="font-light">работы</i>
        </h2>
        <span className="font-mono text-foreground/40 text-sm uppercase tracking-widest">
          {works.length} проектов
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
        {works.map((work, i) => (
          <div
            key={i}
            className="group relative bg-background aspect-[4/3] flex flex-col justify-between p-6 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex items-start justify-between relative z-10">
              <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
                {work.category}
              </span>
              <span className="font-mono text-xs text-foreground/30">
                {work.year}
              </span>
            </div>
            <div className="relative z-10">
              <div className="w-full h-px bg-foreground/10 mb-4 group-hover:bg-foreground/30 transition-colors duration-300" />
              <h3 className="font-sentient text-xl group-hover:text-foreground/70 transition-colors duration-300">
                {work.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
