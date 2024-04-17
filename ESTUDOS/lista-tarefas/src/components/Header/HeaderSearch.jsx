import { Search } from "lucide-react";
import AllNotes from "../Buttons/AllNotes"
import MoonButton from "../Buttons/MoonButton"

const HeaderSearch = (props) => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div
          className={`flex border rounded-md items-end ${
            props.selectedFocus
              ? "border-[#2AB7CA] boxShadow"
              : "border-[#2AB7CA]"
          }`}
        >
          <div>
            <input
              type="text"
              placeholder="Procurar tarefa"
              className="w-[562px] h-[38px] outline-none rounded-md pl-4"
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}
              value={props.value}
              onChange={(e) => props.setValueSearchNotes(e.target.value)}
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
