import { useState } from "react";
import AllNotes from "./Buttons/AllNotes";
import MoonButton from "./Buttons/MoonButton";

import { Plus, Search, Trash2 } from "lucide-react";
import "../components/ListNotes.css";

const ListNotes = () => {
  const [selectedFocus, setSelectedFocus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [valueInputModal, setValueInputModal] = useState("");
  const [mouseOverIndex, setMouseOverIndex] = useState(-1); 
  const [arrayTarefas, setArrayTarefas] = useState([
    "Beber água",
    "Dormir",
    "Caminhar",
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
  };

  const handleCloseModalAddNotes = () => {
    if (valueInputModal === "") {
      alert("Adicione alguma tarefa");
      return;
    } else {
      setIsModalOpen(false);
    }
   
    setArrayTarefas([...arrayTarefas, valueInputModal]);
    setValueInputModal("");
  };

  const handleChangeInput = (e) => {
    setValueInputModal(e.target.value);
  };

  const handleClickDeleteNote = (index) => {
    const newArray = [...arrayTarefas];
    newArray.splice(index, 1); 
    setArrayTarefas(newArray);
  };

  return (
    <>
      <div>
        {/* Inicio do header*/}
        <div className="flex gap-3 items-center">
          <div
            className={`flex border rounded-md items-end ${
              selectedFocus ? "border-[#2AB7CA] boxShadow" : "border-[#2AB7CA]"
            }`}
          >
            <div>
              <input
                type="text"
                placeholder="Procurar tarefa"
                className="w-[562px] h-[38px] outline-none rounded-md pl-4"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <button className="cursor-pointer">
                <Search size={28} className="text-[#2AB7CA] mr-2" />
              </button>
            </div>
          </div>
          <AllNotes />
          <MoonButton />
        </div>
      </div>

      <div className="w-[750px] h-screen flex flex-col items-start">
        <div className="w-full flex flex-col items-center pt-8 pr-4">
          <div>
            {arrayTarefas.map((elemento, index) => (
              <label htmlFor={`check-${index}`} key={index}>
                <div
                  className="w-[450px] flex justify-between items-center border-b border-[#2AB7CA] cursor-pointer"
                >
                  <div className="flex py-5">
                    <input
                      type="checkbox"
                      className="w-7 h-7 cursor-pointer"
                      id={`check-${index}`}
                    />
                    <p className="pl-4 text-xl">{elemento}</p>
                  </div>
                  <div>
                    <button onClick={() => handleClickDeleteNote(index)}>
                      <Trash2
                        size={24}
                        onMouseEnter={() => setMouseOverIndex(index)}
                        onMouseLeave={() => setMouseOverIndex(-1)}
                        className={`${
                          mouseOverIndex === index 
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
        </div>

        <div className="w-full flex justify-end pt-4">
          <button
            className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#2AB7CA] mr-2 cursor-pointer"
            onClick={handleClickOpenModal}
          >
            <Plus size={32} className="text-[#fff]" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="w-[400px] h-[300px] flex flex-col items-center justify-between fixed top-[117px] bg-white rounded-md">
            <div className="w-[360px] flex justify-center pt-5 ">
              <div className="w-full flex flex-col items-center gap-6">
                <p className="text-2xl text-[#575757] font-semibold ">Nova nota</p>
                <input
                  type="text"
                  value={valueInputModal}
                  onChange={handleChangeInput}
                  className="w-full h-[38px] border border-[#2AB7CA] rounded-md  pl-3 outline-none"
                  placeholder="Escreva sua nova tarefa"
                />
              </div>
            </div>
            <div className="w-full flex justify-around items-center pb-[18px] ">
              <div>
                <button
                  className="py-[6px] px-6 border-2 border-[#2AB7CA] rounded-md"
                  onClick={handleCloseModal}
                >
                  <p className="font-bold text-[#2AB7CA]">CANCELAR</p>
                </button>
              </div>
              <div>
                <button
                  className="py-[6px] px-6 border-2 border-[#2AB7CA] bg-[#2AB7CA] rounded-md"
                  onClick={handleCloseModalAddNotes}
                >
                  <p className="font-bold text-[#fff]">ADICIONAR</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListNotes;
