export function About() {
  return (
    <section id="about" className="py-32 border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-6 block">
              Обо мне
            </span>
            <h2 className="text-4xl md:text-5xl font-sentient mb-8">
              Создаю образы, <br />
              <i className="font-light">которые остаются</i>
            </h2>
            <p className="font-mono text-sm text-foreground/60 leading-relaxed max-w-md">
              Графический дизайнер с фокусом на брендинг, типографику и визуальные коммуникации.
              Каждый проект — это поиск уникального визуального языка для конкретной идеи.
            </p>
          </div>

          <div className="space-y-px border border-foreground/10">
            {[
              { label: "Специализация", value: "Брендинг / Print / Digital" },
              { label: "Опыт", value: "5+ лет" },
              { label: "Проектов", value: "80+" },
              { label: "Подход", value: "Концепция → Детали" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-6 py-4 border-b border-foreground/10 last:border-b-0"
              >
                <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
                  {item.label}
                </span>
                <span className="font-mono text-sm text-foreground/80">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
