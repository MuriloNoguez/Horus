import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { postService } from '../data/posts';
import { userService } from '../data/users';

function Perfil() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cpf = localStorage.getItem('cpfUsuario');
      if (!cpf) return;
      const userData = await userService.getUserByCpf(cpf);
      setUser(userData);
      const userPosts = await postService.getPostsByUser(cpf);
      setPosts(userPosts);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-c-Azul overflow-x-hidden">
      <div className="flex md:flex-row w-full">
        {/* Sidebar Desktop */}
        <div className="hidden md:block md:w-[15.5625rem] md:border-r-2 border-c-creme p-5 bg-c-Azul z-10 min-h-screen fixed top-0 left-0">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex-1 w-full md:ml-[15.5625rem]">
          {/* Perfil Header */}
          <main className="bg-c-Azul text-c-creme w-full">
            <section className="flex flex-col md:flex-row border-b-2 border-c-creme items-center px-4 py-8 md:px-12 md:py-12">
              <img src="/perfil.png" alt="Perfil" className="md:w-[10rem] md:h-[10rem] w-[5rem] h-[5rem] rounded-full border-4 border-c-creme shadow-lg" />
              <div className="mt-4 md:mt-0 md:ml-6 flex flex-col gap-2 items-center md:items-start">
                <h3 className="text-xl md:text-3xl font-bold">{user?.nome || 'Usuário'}</h3>
                <p className="text-c-creme/80 text-sm md:text-lg">{user?.email || ''}</p>
                <button className="w-fit px-6 py-2 rounded-md border-2 border-c-creme hover:bg-c-creme hover:text-c-Azul transition font-semibold mt-2">Editar Perfil</button>
              </div>
            </section>
          </main>
          {/* Posts do usuário */}
          <div className="p-4 md:p-8 w-full">
            <h2 className="text-c-creme text-lg md:text-2xl font-bold mb-4">Minhas Publicações</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(!posts || posts.length === 0) && (
                <div className="col-span-full text-c-creme/60 text-center py-8">Nenhuma publicação encontrada.</div>
              )}
              {posts && posts.map((post) => (
                <div key={post.id} className="flex flex-col rounded-xl shadow-lg bg-slate-900/80 overflow-hidden min-h-[22rem] min-w-0">
                  <div className="flex items-center gap-2 px-3 py-2">
                    <img src="/perfil.png" alt="" className="h-8 w-8 rounded-full" />
                    <span className="font-semibold text-c-creme">{user?.nome || 'Usuário'}</span>
                  </div>
                  <div className="w-full aspect-[4/3] bg-black/30 flex items-center justify-center">
                    <img src={post.foto} alt="" className="w-full h-full object-cover rounded-t-xl" />
                  </div>
                  <div className="bg-c-cinza w-full rounded-b-xl pt-2 pb-3 px-2 flex flex-col gap-2">
                    <div className="flex flex-wrap justify-center gap-2 mb-1">
                      <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-3 py-1">{post.esporte}</span>
                      <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-3 py-1">{post.participantes}/{post.vagas}</span>
                      <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-3 py-1">{post.distancia}</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mb-1">
                      <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-3 py-1">{post.data}</span>
                      <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-3 py-1">{post.hora}</span>
                    </div>
                    <div className="flex justify-center text-center mb-1">
                      <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-3 py-1 w-full truncate">{post.local}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar (bottom bar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        <Sidebar />
      </div>
    </div>
  );
}

export default Perfil;
