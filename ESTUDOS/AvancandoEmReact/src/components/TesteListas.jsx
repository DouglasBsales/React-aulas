const TesteListas = () => {
  const listaTarefas = ["Beber água", "Dormir"];

  return (
    <div className="pt-[100px]">
      <div className="flex flex-col items-center gap-4">
        {listaTarefas.map((elemento) => (
          <div key={elemento} className="w-[300px] flex justify-between border py-2 px-4 rounded-md">
            <div>{elemento}</div>
            <div>Items-Secundários</div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TesteListas;
