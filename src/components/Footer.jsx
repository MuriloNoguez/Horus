export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/SimbolBg-P.png" alt="Logo Horus" className="h-8 mr-3"/>
              <span className="text-xl font-bold">HORUS</span>
            </div>
            <p className="text-slate-400">
              Conectando pessoas através do esporte e criando comunidades saudáveis.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Esportes</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Corrida</li>
              <li>Futebol</li>
              <li>Basquete</li>
              <li>Vôlei</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Comunidade</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Grupos</li>
              <li>Eventos</li>
              <li>Competições</li>
              <li>Chat</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Contato</h3>
            <ul className="space-y-2 text-slate-400">
              <li>contato@horus.com</li>
              <li>(21) 99999-9999</li>
              <li>Rio de Janeiro, RJ</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Horus. Todos os direitos reservados. Feito para a comunidade esportiva.</p>
        </div>
      </div>
    </footer>
  );
}