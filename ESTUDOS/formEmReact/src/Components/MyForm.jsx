import { useState } from "react";

const MyForm = () => {
  const [valueName, setValueName] = useState("");
  const [exibirErro, setExibirErro] = useState(false);
  const [nameValid, setNameValid] = useState(false);

  const [valueEmail, setValueEmail] = useState("");
  const [erroEmail, setErroEmail] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const validarName = () => {
    const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{2,}$/;
    if (regex.test(valueName)) {
      setNameValid(true);
      setExibirErro(false);
    } else {
      setNameValid(false);
      setExibirErro(true);
    }
  };

  const validarEmail = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(valueEmail)) {
      setValidEmail(true);
      setErroEmail(false);
    } else {
      setValidEmail(false);
      setErroEmail(true);
    }
  };

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log("enviando o formulário")
  }

  const handleResetForms = ()=>{
    setValueName('')
    setValueEmail('')
  }

  return (
    <div className="w-[500px] mt-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center ">
          <label>
            <p>Nome:</p>
            <input
              type="text"
              value={valueName}
              onChange={(e) => setValueName(e.target.value)}
              onKeyUp={validarName}
              className="w-full h-[38px] border rounded-md pl-2 outline-none"
              placeholder="Digite seu nome"
            />
          </label>

          {nameValid && (<p className="text-green-500 text-sx pl-2">Nome válido!</p>)}
          {exibirErro && (<p className="text-red-500 text-xs pl-2">Digite um nome válido</p>)}
        </div>

        <div className="pt-2">
          <label>
            <p>Email:</p>
            <input
              type="text"
              className="w-full h-[38px] border rounded-md pl-2 outline-none"
              placeholder="Digite seu email"
              onChange={(e) => setValueEmail(e.target.value)}
              onKeyUp={validarEmail}
            />
          </label>

          {erroEmail && (<p className="text-red-500 text-sx pl-2">Digite um email válido!</p>)}
          {validEmail && (<p className="text-green-500 text-sx pl-2">Email valido!</p>)}
        </div>
        <div className="flex justify-center pt-5">
          <input
            type="submit"
            value="Concluir cadastro"
            className="border rounded-md py-2 px-4 cursor-pointer"
            onClick={handleResetForms}
          />
        </div>
      </form>
    </div>
  );
};

export default MyForm;
