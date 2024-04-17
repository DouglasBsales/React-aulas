import { Trash2 } from "lucide-react";

const ListaRender = (props) => {
  return (
    <div>
      {props.listaTarefas
        .filter(
          (elemento) =>
            props.value === "" || elemento.tarefa.includes(props.value)
        )
        .map((elemento) => (
          <label htmlFor={elemento.id} key={elemento.id}>
            <div className="w-[450px] flex justify-between items-center border-b border-[#2AB7CA] cursor-pointer">
              <div className="flex py-5">
                <input
                  type="checkbox"
                  className="w-7 h-7 cursor-pointer"
                  id={elemento.id}
                />
                <p className="pl-4 text-xl">{elemento.tarefa}</p>
              </div>
              <div>
                <button
                  onClick={() => props.handleClickDeleteNote(elemento.id)}
                >
                  <Trash2
                    size={24}
                    onMouseEnter={() =>
                      props.setMouseOverIconTrash(elemento.id)
                    }
                    onMouseLeave={() => props.setMouseOverIconTrash("")}
                    className={`${
                      props.mouseOverIndex === elemento.id
                        ? "text-red-600"
                        : "text-[#ADADAD]"
                    }`}
                  />
                </button>
              </div>
            </div>
          </label>
        ))}
    </div>
  );
};

export default ListaRender;
