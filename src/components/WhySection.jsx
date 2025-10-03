import { Link } from "react-router-dom";

export function WhySection() {
  return (
    <section className="w-full min-h-[40rem] py-16 bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col md:flex-row px-6 md:px-16 justify-between items-center gap-12">
      <div className="flex flex-col items-start justify-center text-left max-w-2xl md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
          Por que praticar<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            atividades físicas?
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
          Praticar esportes melhora a saúde física e mental<br/>
          Amplia o círculo social e cria novas amizades<br/>
          Desenvolve disciplina e autoconfiança<br/>
          Proporciona momentos únicos de diversão<br/><br/>
          Na <strong className="text-blue-600">Horus</strong>, você encontra pessoas com os mesmos interesses para treinar, competir ou só se divertir!
        </p>
        <div className="flex gap-4">
          <Link to="/Login" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition transform hover:scale-105 shadow-lg">
            Começar Agora
          </Link>
          <Link to="/Registro" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition transform hover:scale-105">
            Criar Conta
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:w-1/2">
        <img src="/academia/A-importancia-de-um-treino-bem-planejado.jpg" alt="Atividade física" className="rounded-3xl shadow-2xl w-full max-w-[30rem] h-auto object-cover border-4 border-white"/>
      </div>
    </section>
  );
}
