import { useState } from "react";
import { Plus,  Minus } from "lucide-react";

export default function AppContador() {
  const [number, setNumber] = useState(0);

  const handleClick = ()=>{
    setNumber((prevNumber)=> prevNumber + 1)
  }

  const handleClickMinus = ()=>{
   number === 0 ? alert("Não é possível decrementar o número") :  setNumber((prevNumber)=> prevNumber - 1)
  }

  const handleClickReset = ()=>{
    number === 0 ? alert("Inicie a contagem") : setNumber((prevNumber)=> prevNumber - prevNumber)
  }

  return (
    <div>
      <div className="w-[600px] flex flex-col items-center justify-center rounded-md bg-[#fff]">
        <div className="py-2">
          <p className="text-2xl">Contador de números:{number}</p>
        </div>
        <div className="flex pb-4 gap-3 items-center">
          <div className="flex gap-3">
            <button className="border py-1 px-1 rounded-md" onClick={handleClick}>
              <Plus size={24} />
            </button>
            <button className="border py-1 px-1 rounded-md" onClick={handleClickMinus}>
              <Minus size={24} />
            </button>
            <button className="border py-1 px-2 rounded-md text-md" onClick={handleClickReset}>
              <p>Reiniciar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
