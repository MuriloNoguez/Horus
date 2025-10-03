export function HeroSection() {
  return (
    <section className="relative bg-[url('/academia/acdemia.jpg')] bg-cover bg-center w-full md:h-[35rem] h-[20rem] flex items-center justify-center mt-[3rem] md:mt-[6.25rem]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <img src="/HORUS.png" alt="Logo Horus" className="md:w-[45rem] w-[18rem] drop-shadow-2xl mx-auto mb-6"/>
        <div className="text-white text-center md:text-2xl text-lg font-bold bg-gradient-to-r from-blue-600/90 to-cyan-500/90 px-8 py-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20">
          Sua plataforma social para esportes, eventos e amizades!
        </div>
      </div>
    </section>
  );
}
