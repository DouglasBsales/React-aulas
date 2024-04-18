const EmptyNotes = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img
          src="/Procurando.png"
          alt="Nenhuma tarefa encontrada"
          className="w-[300px] h-auto"
        />
      </div>
      <p className="text-lg font-semibold text-[#202020]">Procurando...</p>
    </div>
  );
};

export default EmptyNotes;
