import { Carousel } from "./Carrossel";

export function MainHome() {
    return (
        <main className="m-0">
            <section className="w-[100%] md:h-[43.75rem] h-[12.5rem] bg-c-Azul text-c-creme flex flex-col items-center">
                <h2 className="md:text-[3.75rem] text-[1rem] font-bold text-center p-10">Encontre na Horus</h2>
                <div className="md:mt-72 md:block hidden">
                    <Carousel visibleImagesCount={5}/>
                </div>
                
            </section>
            <section className="md:w-[100%] md:h-[43.75rem] text-c-Azul bg-c-creme flex px-10 justify-between items-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="md:text-[3.75rem] text-[1rem] font-bold text-center md:pt-10">Por que praticar<br/> atividades físicas?</h2>
                    <p className="md:text-[2rem] text-[0.7125rem]  md:w-[40.75rem] w-[11rem] text-start md:mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing eli Tempore, impeditfmsdgfs praesentium illum explicabo aut reiciendis 
                    </p>
                </div>

                <div className="md:mt-72 md:block hidden">
                    <Carousel visibleImagesCount={3}/>
                </div>

                <div className="md:mt-72 md:hidden">
                    <Carousel visibleImagesCount={1}/>
                </div>
                
            </section>
            <section className="w-[100%] md:h-[43.75rem] h-[12.5rem] bg-c-Azul text-c-creme flex flex-col items-center">
                <h2 className="md:text-[3.75rem] text-[1rem] font-bold text-center p-10">Encontre na Horus</h2>
                <div className="md:mt-72 md:block hidden">
                    <Carousel visibleImagesCount={5}/>
                </div>
                
            </section>
        </main>
    )
  }
  
  