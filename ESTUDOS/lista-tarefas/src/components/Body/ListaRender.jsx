import EmptyNotes from "./EmptyNotes";
import { useState } from "react";
import ModalDeleNote from "./ModalDeleNote";

const ListaRender = ({ listaTarefas, value, setListaTarefas }) => {
  const tarefasFiltradas = listaTarefas.filter(
    (elemento) => value === "" || elemento.tarefa.includes(value)
  );

  const [modalOpenDeleteNote, setModalOpenDeleteNote] = useState(false);
  const [deleteNoteId, setDeleteNoteId] = useState("");
  const [listaCheck, setListaCheck] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleClickModalOpenDeleteNote = (id) => {
    setModalOpenDeleteNote(true);
    setDeleteNoteId(id);
  };

  const handleClickModalClosedDeleteNote = () => {
    setModalOpenDeleteNote(false);
  };

  const handleChangeCheck = (id) => {
    if (listaCheck.includes(id)) {
      setListaCheck(listaCheck.filter((itemId) => itemId !== id));
    } else {
      setListaCheck([...listaCheck, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setListaCheck([]);
    } else {
      const allIds = tarefasFiltradas.map((elemento) => elemento.id);
      setListaCheck(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelectedItems = () => {
    const updatedList = listaTarefas.filter(
      (elemento) => !listaCheck.includes(elemento.id),
      {
        /* Filtra  as tarefas que nao estao em listaCheck para serem exibidas na tela */
      }
    );

    setListaTarefas(updatedList);
    setModalOpenDeleteNote(false);
    setListaCheck([]);
    setSelectAll(false);
  };

  return (
    <>
      {listaCheck.length > 0 && (
        <div className="w-[270px] lg:w-[550px] flex justify-center items-center gap-3 pb-4 flex-wrap-reverse">
          <div className="flex gap-1">
            <p className="text-red-500">({listaCheck.length})</p>
            <p>Selecionados</p>
          </div>
          <button
            className="py-1 px-3 bg-[#2AB7CA] text-[#fff] rounded-md font-semibold"
            onClick={handleSelectAll}
          >
            <p>{selectAll ? "Desselecionar tudo" : "Selecionar todos"}</p>
          </button>
          <button
            className="py-1 px-3 border-red-500 bg-red-500 rounded-md text-[#fff] font-semibold"
            onClick={handleClickModalOpenDeleteNote}
          >
            <p>Excluir</p>
          </button>
        </div>
      )}

      <div>
        {tarefasFiltradas.length === 0 ? (
          <EmptyNotes />
        ) : (
          tarefasFiltradas.map((elemento) => (
            <label htmlFor={elemento.id} key={elemento.id}>
              <div className="w-[270px] lg:w-[550px] flex justify-between items-center border-b border-[#2AB7CA] cursor-pointer">
                <div className="flex py-5">
                  <input
                    type="checkbox"
                    className="w-7 h-7 cursor-pointer outline-none"
                    id={elemento.id}
                    checked={listaCheck.includes(elemento.id)}
                    onChange={() => handleChangeCheck(elemento.id)}
                  />
                  <p className="pl-4 text-xl">{elemento.tarefa}</p>
                </div>
              </div>
            </label>
          ))
        )}
      </div>

      {modalOpenDeleteNote && (
        <ModalDeleNote
          handleDeleteSelectedItems={handleDeleteSelectedItems}
          handleClickModalClosedDeleteNote={handleClickModalClosedDeleteNote}
          id={deleteNoteId}
        />
      )}
    </>
  );
};

export default ListaRender;
