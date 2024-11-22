import './App.css'
import { Carousel } from './componentes/carrossel'
import { Header } from './componentes/header'



function Home() {
  return (
    <>
      < Header />
        <main className='p-7 h-96'>
          <Carousel visibleImagesCount={3}/>
        </main>
    </>
  )
}

export default Home
