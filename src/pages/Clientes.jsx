import { Sidebar } from "../components/Sidebar"
import { PostsList } from "../components/PostsList"

function Clientes() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-c-Azul">
      {/* Sidebar fixa */}
  <aside className="md:w-[15.5625rem] w-full md:border-r-2 border-c-creme p-0 md:p-5 bg-c-Azul z-20 md:relative md:static fixed bottom-0 left-0 right-0 md:h-auto h-[4.5rem] flex items-center md:items-start">
        <Sidebar />
      </aside>

      {/* Conteúdo principal */}
      <section className="flex-1 flex flex-col items-center justify-center p-2 md:p-8 min-w-0">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 min-w-0 place-items-center">
          <PostsList />
        </div>
      </section>
    </main>
  );
}

export default Clientes