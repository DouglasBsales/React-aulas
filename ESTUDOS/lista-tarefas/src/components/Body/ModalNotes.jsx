const ModalNotes = ({
  handleCancelCloseModal,
  value,
  handleChangeInput,
  handleCloseModalAddNotesOnEnter,
  handleCloseModal,
  handleCloseModalAddNotes,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div
        className="w-[300px] lg:w-[450px] h-[300px] flex flex-col items-center justify-between fixed top-[117px] bg-white rounded-md"
        onKeyUp={handleCancelCloseModal}
      >
        <div className="w-[290px] lg:w-[400px] flex justify-center pt-5 ">
          <div className="w-full flex flex-col items-center gap-6">
            <p className="text-2xl text-[#575757] font-semibold ">Nova nota</p>
            <input
              type="text"
              value={value}
              onChange={handleChangeInput}
              onKeyDown={handleCloseModalAddNotesOnEnter}
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
  );
};

export default ModalNotes;
