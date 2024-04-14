import { useState } from "react";

const ManageData = () => {
  const [name, setName] = useState("Douglas Sales")
  const [lastName, setLastName] = useState("Rayelle Amorim")

  const handleClick = ()=>{
    setLastName(name) // está guardando o name = "douglas sales "

    setName((prevName)=> prevName === name ? lastName : name)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <p>Olá, meu nome é: {name}</p>
      <button className="border py-2 px-4 rounded-md " onClick={handleClick}>
        <p>Clique para alternar entre os nomes</p>
      </button>
    </div>
  );
};

export default ManageData;
