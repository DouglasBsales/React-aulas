import { Plus } from "lucide-react";

const ContentNotes = ({ renderNotes, handleClickOpenModal }) => {

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-full  flex flex-col items-center pr-4 pt-8 ">
        <div>{renderNotes()}</div>
      </div>

      <div className="flex justify-end items-start pt-4 pb-[50px]">
        <button
          className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flex items-center justify-center rounded-full bg-[#2AB7CA] mr-2 cursor-pointer"
          onClick={handleClickOpenModal}
        >
          <Plus size={30} className="text-[#fff] : text-[35px]" />
        </button>
      </div>
    </div>
  );
};

export default ContentNotes;
