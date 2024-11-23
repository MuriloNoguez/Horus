
import { Carousel } from './componentes/carrossel'
import { Header } from './componentes/header'



function Home() {
  return (
    <>
      < Header />
        <main className='pt-28 h-96'>
          <Carousel visibleImagesCount={3}/>
        </main>
    </>
  )
}

export default Home
