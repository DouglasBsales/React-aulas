import TestandoImagens from "../components/TestandoImagens";
import ManageData from "../components/ManageData";
import IronMan from "../assets/ironMan.png"
import TesteListas from "../components/TesteListas";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState("");

  const handleClick = ()=>{
    setSelected(!selected)
  }

  return (
    <div className="flex flex-col items-center justify-center pt-[100px]">
      <div>
        <p
          className={`text-6xl cursor-pointer ${selected ? "text-[red]" : "text-[#202020]"}`}
          onClick={handleClick}
        >
          Avançando em React
        </p>
      </div>
      <TestandoImagens />
      <div>
        <img src={IronMan} alt="" className="w-28 h-28" />
      </div>
      <ManageData />
      <TesteListas />
    </div>
  );
}
