export function VideoSection() {
  return (
    <section id="video" className="py-32 container mx-auto px-6">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-4xl md:text-5xl font-sentient">
          Процесс <br />
          <i className="font-light">работы</i>
        </h2>
        <span className="font-mono text-foreground/40 text-sm uppercase tracking-widest">
          Видео
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="aspect-video bg-foreground/5 border border-foreground/10 flex flex-col items-center justify-center group cursor-pointer hover:border-foreground/30 transition-colors duration-300">
          <div className="w-14 h-14 rounded-full border border-foreground/20 flex items-center justify-center mb-4 group-hover:border-foreground/60 transition-colors duration-300">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-foreground/60 border-b-[8px] border-b-transparent ml-1" />
          </div>
          <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
            Showreel 2024
          </span>
        </div>

        <div className="aspect-video bg-foreground/5 border border-foreground/10 flex flex-col items-center justify-center group cursor-pointer hover:border-foreground/30 transition-colors duration-300">
          <div className="w-14 h-14 rounded-full border border-foreground/20 flex items-center justify-center mb-4 group-hover:border-foreground/60 transition-colors duration-300">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-foreground/60 border-b-[8px] border-b-transparent ml-1" />
          </div>
          <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
            Behind the scenes
          </span>
        </div>
      </div>
    </section>
  );
}
