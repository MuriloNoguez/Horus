import { Carousel } from "./Carousel";

export function LandingCarouselSection() {
  return (
    <section className="w-full min-h-[40rem] bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center py-16 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Encontre na <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Horus</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto px-4">
          Descubra atividades incríveis e conecte-se com pessoas que compartilham sua paixão por esportes
        </p>
      </div>
      <div className="w-full flex flex-col items-center overflow-hidden">
        <div className="md:block hidden">
          <Carousel visibleImagesCount={5}/>
        </div>
        <div className="md:hidden">
          <Carousel visibleImagesCount={3}/>
        </div>
      </div>
    </section>
  );
}
