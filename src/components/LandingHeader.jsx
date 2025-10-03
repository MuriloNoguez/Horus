import { Link } from "react-router-dom";

export function LandingHeader() {
  return (
    <header className="bg-slate-900/95 backdrop-blur-md flex justify-between px-6 fixed top-0 left-0 right-0 w-full md:h-[6.25rem] h-[3rem] items-center z-[100] shadow-xl border-b border-cyan-500/20">
      <div className="flex items-center">
        <img src="/SimbolBg-P.png" alt="Logo Horus" className="md:h-[3rem] h-[2.2rem] filter drop-shadow-lg"/>
        <span className="ml-3 text-white font-bold md:text-xl text-sm hidden md:block">HORUS</span>
      </div>
      <nav className="flex justify-center items-center">
        <div className="flex md:gap-4 gap-2">
          <Link to={'/Login'} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold md:text-base md:px-6 md:py-3 px-4 py-2 rounded-xl flex justify-center items-center text-sm transition hover:from-cyan-600 hover:to-blue-700 focus:outline-none shadow-lg hover:shadow-xl transform hover:scale-105">
            Entrar
          </Link>
          <Link to={'/Registro'} className="border-2 border-cyan-500 text-cyan-400 hover:text-white font-bold md:text-base md:px-6 md:py-3 px-4 py-2 rounded-xl flex justify-center items-center text-sm transition hover:bg-cyan-500/20 focus:outline-none shadow-lg hover:shadow-xl transform hover:scale-105">
            Cadastrar
          </Link>
        </div>
      </nav>
    </header>
  );
}
