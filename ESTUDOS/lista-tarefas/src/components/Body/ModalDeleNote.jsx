const ModalDeleNote = ({
  handleDeleteSelectedItems,
  handleClickModalClosedDeleteNote,
  id,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="w-[300px] lg:w-[400px] h-[150px] flex flex-col items-center justify-between fixed top-[200px] bg-white rounded-md">
        <div className="w-[360px] flex justify-center pt-5 ">
          <p className="text-lg font-semibold text-[#575757]">
            Deseja realmente excluir a tarefa?
          </p>
        </div>
        <div className="w-full flex justify-around items-center pb-[18px] ">
          <div>
            <button
              className="py-[6px] px-6 border-2 border-[#2AB7CA] rounded-md"
              onClick={handleClickModalClosedDeleteNote}
            >
              <p className="font-bold text-[#2AB7CA]">CANCELAR</p>
            </button>
          </div>
          <div>
            <button
              className="py-[6px] px-6 border-2 border-red-500 bg-red-500 rounded-md"
              onClick={() => handleDeleteSelectedItems(id)}
            >
              <p className="font-bold text-[#fff]">EXCLUIR</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleNote;
