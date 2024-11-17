import './App.css'
import { Carousel } from './componentes/carrossel'



function Home() {
  return (
    <>
      <div>
        <header>
          <h1>Meu Carrossel</h1>
        </header>
        <main className='p-7 h-96'>
          <Carousel visibleImagesCount={3}/>
        </main>
      </div>
    </>
  )
}

export default Home
