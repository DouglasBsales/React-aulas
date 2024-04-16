
import { useState } from "react";

const TesteInput = () => {

    const [valueInput, setValueInput] = useState('')
    const [updateValueInput, setUpdateValueInput] = useState('')

    const handleClick = ()=>{
        setUpdateValueInput(valueInput)
    }

  return (
    <div className="pb-12">
        <p>O nome do usuário será: {updateValueInput}</p>
      <div>
          <input type="text" className="outline-none border rounded-md w-64"
          value={valueInput}
          onChange={(e)=> setValueInput(e.target.value)}
          />
      </div>
      <button onClick={handleClick}>
        Adicione o seu nome
      </button>
    </div>
  );
};

export default TesteInput
