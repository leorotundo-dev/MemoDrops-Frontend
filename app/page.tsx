import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="antialiased text-slate-900 bg-slate-50 selection:bg-sky-200/60">
      {/* NAV */}
      <header className="sticky top-0 z-50">
        <div className="glass border-b border-white/40">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 24 24" className="text-sky-500">
                <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"/>
              </svg>
              <span className="font-semibold">MemoDrops</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="hover:text-sky-600">Recursos</a>
              <a href="#como-funciona" className="hover:text-sky-600">Como funciona</a>
              <a href="#preco" className="hover:text-sky-600">Preços</a>
              <a href="#faq" className="hover:text-sky-600">FAQ</a>
              <a href="#lgpd" className="hover:text-sky-600">LGPD & Termos</a>
            </nav>
            <div className="flex items-center gap-2">
              <Link href="/login" className="hidden md:inline-flex px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 btn">
                Entrar
              </Link>
              <Link href="/register" className="inline-flex px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white btn">
                Começar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Foque no que <span className="title-grad">mais cai</span> e memorize com SRS + IA
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              O MemoDrops organiza seus estudos com repetição espaçada, gera cartas com IA e prioriza conteúdos pelo <strong>Índice de Cobrança</strong> de cada banca/cargo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/register" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white btn">
                <span>Começar agora</span>
              </Link>
              <a href="#features" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 btn">
                Ver recursos
              </a>
            </div>
            <div className="mt-6 text-xs text-slate-500">
              Sem anúncios. Privacidade em primeiro lugar. Offline-first.
            </div>
          </div>
          <div className="relative">
            <div className="card p-0 overflow-hidden">
              <Image src="/assets/hero.png" alt="Preview do app" width={600} height={400} className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block rotate-1 card p-0 w-40">
              <Image src="/assets/screenshot-1.png" alt="screenshot" width={160} height={300} />
            </div>
            <div className="absolute -top-6 -right-8 hidden md:block -rotate-2 card p-0 w-40">
              <Image src="/assets/screenshot-2.png" alt="screenshot" width={160} height={300} />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="card p-4">
            <div className="text-sm text-slate-500">Foco em concurseiros</div>
            <div className="text-xl font-semibold mt-1">Bancas como FGV e Cebraspe</div>
          </div>
          <div className="card p-4">
            <div className="text-sm text-slate-500">Conteúdo validado</div>
            <div className="text-xl font-semibold mt-1">IA com checagem e fontes</div>
          </div>
          <div className="card p-4">
            <div className="text-sm text-slate-500">Eficiência real</div>
            <div className="text-xl font-semibold mt-1">SRS + Índice de Cobrança</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">O que você ganha</h2>
          <p className="mt-2 text-slate-600">Tudo o que precisa para estudar com constância e inteligência.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="text-sky-500 text-2xl">📈</div>
            <h3 className="font-semibold mt-2">Prioridade pelo que mais cai</h3>
            <p className="text-sm text-slate-600 mt-1">Estude primeiro os subtemas com maior histórico de cobrança por banca/cargo.</p>
          </div>
          <div className="card p-6">
            <div className="text-sky-500 text-2xl">🧠</div>
            <h3 className="font-semibold mt-2">Repetição espaçada</h3>
            <p className="text-sm text-slate-600 mt-1">Fila diária com SM-2 e ajuste dinâmico conforme acertos/erros.</p>
          </div>
          <div className="card p-6">
            <div className="text-sky-500 text-2xl">✨</div>
            <h3 className="font-semibold mt-2">IA com validação</h3>
            <p className="text-sm text-slate-600 mt-1">Geração assistida, preview obrigatório e checagem de fontes.</p>
          </div>
          <div className="card p-6">
            <div className="text-sky-500 text-2xl">📚</div>
            <h3 className="font-semibold mt-2">Biblioteca de decks</h3>
            <p className="text-sm text-slate-600 mt-1">Materiais curados por disciplina e carreira. Clonagem para personalizar.</p>
          </div>
          <div className="card p-6">
            <div className="text-sky-500 text-2xl">🔔</div>
            <h3 className="font-semibold mt-2">Hábitos e streak</h3>
            <p className="text-sm text-slate-600 mt-1">Metas diárias, lembretes e streak freeze para imprevistos.</p>
          </div>
          <div className="card p-6">
            <div className="text-sky-500 text-2xl">🔒</div>
            <h3 className="font-semibold mt-2">Privacidade</h3>
            <p className="text-sm text-slate-600 mt-1">Dados no dispositivo e sincronização segura. Sem anúncios.</p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-semibold">Como funciona</h2>
            <p className="mt-2 text-slate-600">Três passos simples.</p>
          </div>
          <div className="md:col-span-2 grid gap-4">
            <div className="card p-5">
              <div className="text-sm text-slate-500">1. Defina seu objetivo</div>
              <div className="font-semibold">Escolha banca/cargo e metas diárias</div>
            </div>
            <div className="card p-5">
              <div className="text-sm text-slate-500">2. Monte sua fila</div>
              <div className="font-semibold">Decks curados + IA com validação de fontes</div>
            </div>
            <div className="card p-5">
              <div className="text-sm text-slate-500">3. Revise todo dia</div>
              <div className="font-semibold">SRS ajusta a dificuldade e mostra seu progresso</div>
            </div>
          </div>
        </div>
      </section>

      {/* PREÇOS */}
      <section id="preco" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Planos simples</h2>
          <p className="text-slate-600 mt-2">Comece grátis. Faça upgrade quando precisar de mais IA e recursos.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="text-sm text-slate-500">Iniciante</div>
            <div className="text-3xl font-semibold mt-1">R$ 0</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Fila diária (SRS)</li>
              <li>• Biblioteca básica</li>
              <li>• Sincronização limitada</li>
            </ul>
            <Link href="/register" className="mt-6 inline-flex w-full justify-center px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 btn">
              Começar
            </Link>
          </div>
          <div className="card p-6 ring-1 ring-sky-100">
            <div className="text-sm text-slate-500">Pro</div>
            <div className="text-3xl font-semibold mt-1">R$ 19/mês</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• IA com validação + preview</li>
              <li>• Priorização por Índice de Cobrança</li>
              <li>• Métricas avançadas e streak freeze</li>
            </ul>
            <Link href="/register" className="mt-6 inline-flex w-full justify-center px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white btn">
              Assinar Pro
            </Link>
          </div>
          <div className="card p-6">
            <div className="text-sm text-slate-500">Equipe</div>
            <div className="text-3xl font-semibold mt-1">Sob consulta</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Espaços de estudo compartilhados</li>
              <li>• Gestão de licenças</li>
              <li>• Suporte prioritário</li>
            </ul>
            <a href="mailto:contato@memodrops.com" className="mt-6 inline-flex w-full justify-center px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 btn">
              Contato
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-5xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-semibold text-center">Perguntas frequentes</h3>
        <div className="mt-8 divide-y bg-white border rounded-2xl overflow-hidden">
          <details className="p-5 group">
            <summary className="cursor-pointer font-medium flex items-center justify-between">
              Como o Índice de Cobrança funciona?
              <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
            </summary>
            <p className="text-slate-600 mt-2">Analisamos questões recentes por banca/cargo e aplicamos decaimento temporal. O app prioriza os subtemas mais cobrados na sua área.</p>
          </details>
          <details className="p-5 group">
            <summary className="cursor-pointer font-medium flex items-center justify-between">
              O conteúdo gerado por IA é confiável?
              <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
            </summary>
            <p className="text-slate-600 mt-2">Todo conteúdo passa por checagem de fontes, preview obrigatório e regras de validação antes de entrar no seu deck.</p>
          </details>
          <details className="p-5 group">
            <summary className="cursor-pointer font-medium flex items-center justify-between">
              Posso estudar offline?
              <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
            </summary>
            <p className="text-slate-600 mt-2">Sim. O app faz pré-carga da sua fila de estudo por 7–14 dias e sincroniza quando houver rede.</p>
          </details>
        </div>
      </section>

      {/* LGPD & TERMOS */}
      <section id="lgpd" className="max-w-5xl mx-auto px-4 pb-20">
        <h3 className="text-2xl font-semibold text-center">LGPD & Termos</h3>
        <div className="mt-6 grid gap-6">
          <details className="card p-5 group" open>
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              Política de Privacidade (LGPD)
              <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-700 space-y-3">
              <p><strong>Controlador:</strong> MemoDrops (contato@memodrops.com)</p>
              <p><strong>Dados coletados:</strong> e-mail/SSO, eventos de estudo (seudonimizados), conteúdo que você cria. Não vendemos dados.</p>
              <p><strong>Finalidades:</strong> autenticação, sincronização, melhorias do produto, segurança antifraude.</p>
              <p><strong>Base legal:</strong> execução de contrato e legítimo interesse (art. 7º, LGPD). Marketing somente com consentimento.</p>
              <p><strong>Direitos do titular:</strong> acesso, correção, portabilidade, exclusão. Solicite em configurações da conta.</p>
              <p><strong>Retenção:</strong> mantemos o mínimo necessário; você pode excluir a conta a qualquer momento.</p>
              <p><strong>Segurança:</strong> criptografia em trânsito, armazenamento seguro, controles de acesso.</p>
            </div>
          </details>

          <details className="card p-5 group">
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              Termos de Uso
              <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-700 space-y-3">
              <p>Ao usar o MemoDrops, você concorda em não publicar conteúdo que infrinja direitos ou viole leis.</p>
              <p>Conteúdos públicos/curados podem ser atualizados ou removidos para atender a exigências legais.</p>
              <p>Assinaturas são renovadas automaticamente; você pode cancelar a qualquer momento nas configurações.</p>
              <p>O app é fornecido "no estado em que se encontra"; não nos responsabilizamos por perdas indiretas.</p>
            </div>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="text-2xl font-semibold">Pronto para estudar com foco?</div>
            <div className="text-slate-600 mt-2">Comece hoje mesmo. É grátis!</div>
          </div>
          <div className="flex md:justify-end gap-3">
            <Link href="/register" className="inline-flex px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white btn">
              Começar agora
            </Link>
            <a href="#preco" className="inline-flex px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 btn">
              Ver planos
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pb-10 text-xs text-slate-500 flex flex-wrap gap-4 justify-between">
          <div>© {new Date().getFullYear()} MemoDrops. Todos os direitos reservados.</div>
          <div className="flex gap-4">
            <a href="#lgpd" className="hover:text-slate-700">Privacidade (LGPD)</a>
            <a href="#lgpd" className="hover:text-slate-700">Termos</a>
            <a href="mailto:contato@memodrops.com" className="hover:text-slate-700">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
