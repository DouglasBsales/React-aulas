import { Trash2 } from "lucide-react";
import EmptyNotes from "./EmptyNotes";
import { useState } from "react";
import ModalDeleNote from "./ModalDeleNote";

const ListaRender = ({
  listaTarefas,
  value,
  setMouseOverIconTrash,
  mouseOverId,
  setListaTarefas,
}) => {
  const tarefasFiltradas = listaTarefas.filter(
    (elemento) => value === "" || elemento.tarefa.includes(value)
  );

  const [modalOpenDeleteNote, setModalOpenDeleteNote] = useState(false);
  const [deleteNoteId, setDeleteNoteId] = useState('');

  const handleClickModalOpenDeleteNote = (id) => {
    setModalOpenDeleteNote(true);
    setDeleteNoteId(id);
  };

  const handleClickModalClosedDeleteNote = () => {
    setModalOpenDeleteNote(false);
  };

  const handleClickDeleteNoteModal = () => {
    setListaTarefas(
      listaTarefas.filter((elemento) => elemento.id !== deleteNoteId)
    );
    setModalOpenDeleteNote(false);
  };

  return (
    <>
      <div>
        {tarefasFiltradas.length === 0 ? (
          <EmptyNotes />
        ) : (
          tarefasFiltradas.map((elemento) => (
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
                    onClick={() => handleClickModalOpenDeleteNote(elemento.id)}
                  >
                    <Trash2
                      size={24}
                      onMouseEnter={() => setMouseOverIconTrash(elemento.id)}
                      onMouseLeave={() => setMouseOverIconTrash("")}
                      className={`${
                        mouseOverId === elemento.id
                          ? "text-red-600"
                          : "text-[#ADADAD]"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </label>
          ))
        )}
      </div>

      {modalOpenDeleteNote && (
        <ModalDeleNote
          handleClickDeleteNoteModal={handleClickDeleteNoteModal}
          handleClickModalClosedDeleteNote={handleClickModalClosedDeleteNote}
          id={deleteNoteId}
        />
      )}
    </>
  );
};

export default ListaRender;
