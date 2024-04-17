

const ModalNotes = (props) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
    <div
      className="w-[400px] h-[300px] flex flex-col items-center justify-between fixed top-[117px] bg-white rounded-md"
      onKeyUp={props.handleCancelCloseModal}
    >
      <div className="w-[360px] flex justify-center pt-5 ">
        <div className="w-full flex flex-col items-center gap-6">
          <p className="text-2xl text-[#575757] font-semibold ">
            Nova nota
          </p>
          <input
            type="text"
            value={props.value}
            onChange={props.handleChangeInput}
            onKeyDown={props.handleCloseModalAddNotesOnEnter}
            className="w-full h-[38px] border border-[#2AB7CA] rounded-md  pl-3 outline-none"
            placeholder="Escreva sua nova tarefa"
          />
        </div>
      </div>
      <div className="w-full flex justify-around items-center pb-[18px] ">
        <div>
          <button
            className="py-[6px] px-6 border-2 border-[#2AB7CA] rounded-md"
            onClick={props.handleCloseModal}
          >
            <p className="font-bold text-[#2AB7CA]">CANCELAR</p>
          </button>
        </div>
        <div>
          <button
            className="py-[6px] px-6 border-2 border-[#2AB7CA] bg-[#2AB7CA] rounded-md"
            onClick={props.handleCloseModalAddNotes}
          >
            <p className="font-bold text-[#fff]">ADICIONAR</p>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalNotes
