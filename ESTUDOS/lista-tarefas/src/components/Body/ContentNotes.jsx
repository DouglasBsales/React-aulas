import { Plus } from "lucide-react";

const ContentNotes = ({renderNotes, handleClickOpenModal}) => {
  return (
    <div className="w-[750px] h-screen flex justify-center">
      <div className="w-full flex flex-col items-center pt-8 pr-4">
        <div>{renderNotes()}</div>
      </div>

      <div className="flex justify-end items-center pt-4 pb-[50px]">
        <button
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#2AB7CA] mr-2 cursor-pointer"
          onClick={handleClickOpenModal} 
        >
          <Plus size={32} className="text-[#fff]" />
        </button>
      </div>
    </div>
  );
};

export default ContentNotes;
