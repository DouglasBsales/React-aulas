const EmptyNotes = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img
          src="/Procurando.png"
          alt="Nenhuma tarefa encontrada"
          className="w-[200px] h-auto lg:w-[300px]"
        />
      </div>
      <p className="text-lg font-semibold text-[#828282]">Nenhuma tarefa adicionada</p>
    </div>
  );
};

export default EmptyNotes;
