import { Search } from "lucide-react";
import AllNotes from "../Buttons/AllNotes";
import MoonButton from "../Buttons/MoonButton";

const HeaderSearch = ({
  selectedFocus,
  handleFocus,
  handleBlur,
  value,
  setValueSearchNotes,
}) => {
  return (
    <div>
      <div className="w-[370px] lg:w-[750px] flex gap-3 items-center justify-start">
        <div
          className={`flex border rounded-md items-end ${
            selectedFocus ? "border-[#2AB7CA] boxShadow" : "border-[#2AB7CA]"
          }`}
        >
          <div>
            <input
              type="text"
              placeholder="Procurar tarefa"
              className="w-[180px] lg:w-[562px] h-[38px] outline-none rounded-md pl-4"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={value}
              onChange={(e) => setValueSearchNotes(e.target.value)}
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
  );
};

export default HeaderSearch;
