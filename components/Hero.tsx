import Link from 'next/link';

export default function Hero(){
  return (
    <section className="mx-auto mt-20 max-w-5xl px-4 text-center">
      <div className="kicker">Pílulas de aprendizado</div>
      <h1 className="title mt-2">Estude melhor, em menos tempo</h1>
      <p className="subtitle mt-3">
        Flashcards inteligentes, gerados por IA e organizados por concursos.
        Revise em ciclos curtos e veja seu progresso diariamente.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link href="/login" className="btn-primary">Começar Agora</Link>
        <a href="#precos" className="btn-ghost">Ver Planos</a>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="card text-left">
          <div className="kicker">IA</div>
          <div className="font-medium">Gere cards a partir de PDF/URL</div>
          <p className="text-sm text-ink-600 mt-1">Use o LLM para transformar conteúdo em flashcards excelentes.</p>
        </div>
        <div className="card text-left">
          <div className="kicker">Revisão espaçada</div>
          <div className="font-medium">Baseado em SM‑2</div>
          <p className="text-sm text-ink-600 mt-1">Reveja no momento certo e aumente a retenção.</p>
        </div>
        <div className="card text-left">
          <div className="kicker">Notificações</div>
          <div className="font-medium">Lembretes inteligentes</div>
          <p className="text-sm text-ink-600 mt-1">Receba push no melhor horário (respeitando quiet hours).</p>
        </div>
      </div>
    </section>
  );
}
