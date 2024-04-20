import { useState } from "react";
import { nanoid } from "nanoid";
import ListaRender from "./Body/ListaRender";
import HeaderSearch from "./Header/HeaderSearch";
import ContentNotes from "./Body/ContentNotes";
import ModalNotes from "./Body/ModalNotes";
import "../components/ListNotes.css";

const ListNotes = () => {
  const [selectedFocus, setSelectedFocus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);;
  const [valueInputModal, setValueInputModal] = useState("");
  const [valueSearchNotes, setValueSearchNotes] = useState("");
  const [mouseOverId, setMouseOverIconTrash] = useState("");
  const [listaTarefas, setListaTarefas] = useState([
    { id: "134D23Ghg%1sad", tarefa: "Beber água" },
    { id: "1askjda$q3sd", tarefa: "Dormir" },
    { id: "85726Sqejh124", tarefa: "Estudar!" },
  ]);

  const handleFocus = () => {
    setSelectedFocus(true);
  };

  const handleBlur = () => {
    setSelectedFocus(false);
  };

  const handleClickOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setValueInputModal("");
  };

  const handleCancelCloseModal = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  const handleCloseModalAddNotes = () => {
    const novaTarefa = {
      id: nanoid(),
      tarefa: valueInputModal.trim(),
    };

    if (valueInputModal.trim() === "") {
      alert("Adicione alguma tarefa");
      return;
    } else {
      setIsModalOpen(false);
    }

    setListaTarefas([...listaTarefas, novaTarefa]);
    setValueInputModal("");
    setValueSearchNotes("");
  };

  const handleCloseModalAddNotesOnEnter = (event) => {
    if (event.key === "Enter") {
      handleCloseModalAddNotes();
    }
  };

  const handleChangeInput = (e) => {
    setValueInputModal(e.target.value);
  };

  const renderNotes = () => {
    return (
      <ListaRender
        listaTarefas={listaTarefas}
        value={valueSearchNotes}
        mouseOverId={mouseOverId}
        setMouseOverIconTrash={setMouseOverIconTrash}
        setListaTarefas={setListaTarefas}
      />
    );
  };

  return (
    <>
      <HeaderSearch
        selectedFocus={selectedFocus}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        value={valueSearchNotes}
        setValueSearchNotes={setValueSearchNotes}
      />

      <ContentNotes
        renderNotes={renderNotes}
        handleClickOpenModal={handleClickOpenModal}
      />

      {isModalOpen && (
        <ModalNotes
          handleCancelCloseModal={handleCancelCloseModal}
          value={valueInputModal}
          handleChangeInput={handleChangeInput}
          handleCloseModalAddNotesOnEnter={handleCloseModalAddNotesOnEnter}
          handleCloseModalAddNotes={handleCloseModalAddNotes}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default ListNotes;
