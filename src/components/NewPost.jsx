import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { userService } from '../data/users';
import { postService } from '../data/posts';

export function NewPost({ publis, setPublis }) {
  const { register, handleSubmit, reset } = useForm();
  const [cpfUsuario, setCpfUsuario] = useState('');

  useEffect(() => {
    const cpf = localStorage.getItem('cpfUsuario');
    if (cpf) {
      console.log("CPF encontrado no localStorage:", cpf);
      setCpfUsuario(cpf);
    } else {
      console.error("CPF do usuário não encontrado no localStorage");
    }
  }, []);

  const obterUsuarioPorCpf = async (cpf) => {
    try {
      const user = await userService.getUserByCpf(cpf);
      return user;
    } catch (error) {
      console.error("Erro ao obter usuário:", error);
    }
  };

  const incluirPubli = async (data) => {
    if (!cpfUsuario) {
      console.error("CPF do usuário não encontrado no localStorage");
      return;
    }

    const usuario = await obterUsuarioPorCpf(cpfUsuario);
    if (!usuario) {
      console.error("Usuário não encontrado");
      return;
    }

    const novoPost = {
      foto: data.foto || "/HeaderBG.png",
      esporte: data.esporte,
      local: data.local,
      vagas: parseInt(data.vagas),
      data: data.data,
      hora: data.hora,
      distancia: data.distancia,
      cpfUsuario: usuario.cpf
    };

    try {
      const createdPost = await postService.createPost(novoPost);
      const publi2 = [...publis, createdPost];
      setPublis(publi2);
      reset();
    } catch (error) {
      console.error("Erro ao criar publicação:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(incluirPubli)} className="bg-c-Azul md:min-h-[90vh] md:w-[28rem] w-[95vw] max-w-[28rem] mx-auto rounded-2xl shadow-2xl p-6 flex flex-col gap-4">
      {/* Inputs modernos */}
      <div className="flex flex-col gap-1">
        <label htmlFor="esporte" className="text-c-creme font-semibold text-sm pl-2">Esporte</label>
        <div className="flex items-center gap-2 bg-slate-800/80 rounded-xl px-3 py-2 border border-c-creme focus-within:ring-2 ring-c-creme">
          <img src="/perfil.png" alt="" className="w-6 h-6 opacity-70 newpost-modal-icon" />
          <input type="text" id="esporte" required {...register("esporte")}
            className="bg-transparent font-semibold text-c-creme w-full outline-none placeholder:text-c-creme/60 text-base px-2" placeholder="Ex: Futebol" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="local" className="text-c-creme font-semibold text-sm pl-2">Local</label>
        <div className="flex items-center gap-2 bg-slate-800/80 rounded-xl px-3 py-2 border border-c-creme focus-within:ring-2 ring-c-creme">
          <img src="/perfil.png" alt="" className="w-6 h-6 opacity-70 newpost-modal-icon" />
          <input type="text" id="local" required {...register("local")}
            className="bg-transparent font-semibold text-c-creme w-full outline-none placeholder:text-c-creme/60 text-base px-2" placeholder="Ex: Campo do Flamengo" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="vagas" className="text-c-creme font-semibold text-sm pl-2">Vagas</label>
        <div className="flex items-center gap-2 bg-slate-800/80 rounded-xl px-3 py-2 border border-c-creme focus-within:ring-2 ring-c-creme">
          <img src="/perfil.png" alt="" className="w-6 h-6 opacity-70 newpost-modal-icon" />
          <input type="number" id="vagas" required {...register("vagas")}
            className="bg-transparent font-semibold text-c-creme w-full outline-none placeholder:text-c-creme/60 text-base px-2" placeholder="Ex: 10" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="data" className="text-c-creme font-semibold text-sm pl-2">Data</label>
        <div className="flex items-center gap-2 bg-slate-800/80 rounded-xl px-3 py-2 border border-c-creme focus-within:ring-2 ring-c-creme">
          <img src="/perfil.png" alt="" className="w-6 h-6 opacity-70 newpost-modal-icon" />
          <input type="date" id="data" required {...register("data")}
            className="bg-transparent font-semibold text-c-creme w-full outline-none placeholder:text-c-creme/60 text-base px-2 newpost-modal-icon" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="hora" className="text-c-creme font-semibold text-sm pl-2">Hora</label>
        <div className="flex items-center gap-2 bg-slate-800/80 rounded-xl px-3 py-2 border border-c-creme focus-within:ring-2 ring-c-creme">
          <img src="/perfil.png" alt="" className="w-6 h-6 opacity-70 newpost-modal-icon" />
          <input type="time" id="hora" required {...register("hora")}
            className="bg-transparent font-semibold text-c-creme w-full outline-none placeholder:text-c-creme/60 text-base px-2 newpost-modal-icon" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="distancia" className="text-c-creme font-semibold text-sm pl-2">Distância</label>
        <div className="flex items-center gap-2 bg-slate-800/80 rounded-xl px-3 py-2 border border-c-creme focus-within:ring-2 ring-c-creme">
          <img src="/perfil.png" alt="" className="w-6 h-6 opacity-70" />
          <input type="text" id="distancia" required {...register("distancia")}
            className="bg-transparent font-semibold text-c-creme w-full outline-none placeholder:text-c-creme/60 text-base px-2" placeholder="Ex: 2km" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <input type="submit" value="Incluir" className="h-12 w-full max-w-xs text-xl bg-c-creme rounded-xl mt-2 mb-2 text-c-Azul font-bold shadow-md hover:bg-c-creme/90 transition" />
      </div>
    </form>
  );
}