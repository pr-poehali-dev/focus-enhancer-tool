import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-foreground/10">
      <div className="container mx-auto px-6 text-center">
        <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-6 block">
          Контакты
        </span>
        <h2 className="text-4xl md:text-6xl font-sentient mb-8">
          Есть проект? <br />
          <i className="font-light">Давайте поговорим</i>
        </h2>
        <p className="font-mono text-sm text-foreground/60 mb-14 max-w-md mx-auto">
          Открыт к новым проектам и коллаборациям. Напишите — обсудим детали.
        </p>
        <Button size="lg" asChild>
          <a href="mailto:hello@example.com">[Написать письмо]</a>
        </Button>
      </div>
    </section>
  );
}
