import { ChevronDown} from "lucide-react";

const AllNotes = ()=>{
    return (
        <div>
            <button className="flex items-center justify-between w-[85px] h-[38px] bg-[#2AB7CA] text-[#fff] font-semibold rounded-md p-[10px]">
              <p>Todos</p>
              <p>
                <ChevronDown size={15} />
              </p>
            </button>
          </div>
    )
}

export default AllNotes