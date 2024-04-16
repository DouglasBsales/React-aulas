import { useState } from "react";

const TesteListas = () => {
  const listaTarefas = ["Beber água", "Dormir"];

  const [selectedItem, setSelectedItem] = useState('');

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="pt-[100px]">
      <div className="flex flex-col items-center gap-4">
        {listaTarefas.map((elemento, index) => (
          <div 
            key={index} 
            className={`w-[300px] flex justify-between border py-2 px-4 rounded-md cursor-pointer ${selectedItem === index ? "bg-[#202020] text-[#fff]" : 'bg-[#fff] text-[#202020]'}`}
            onClick={() => handleClick(index)}
          >
            <div>{elemento}</div>
            <div>Items-Secundários</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TesteListas;
