import { useState } from "react";

const ManageData = () => {
  const [name, setName] = useState("Rodrigo");
  const [updateName, setUpdateName] = useState("Douglas");

  const handleClick = () => {
   setUpdateName(name)
   setName(name === name ? updateName : name)
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p>Olá, meu nome é: {name}</p>
      <button className="border py-2 px-4 rounded-md" onClick={handleClick}>
        <p>Clique para alternar entre os nomes</p>
      </button>
    </div>
  );
};

export default ManageData;
