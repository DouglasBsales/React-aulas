import { useState } from "react";

const MyForm = ({ user }) => {
  const [valueName, setValueName] = useState(user ? user.name : "");
  const [exibirErro, setExibirErro] = useState(false);
  const [nameValid, setNameValid] = useState(false);

  const [valueEmail, setValueEmail] = useState(user ? user.email : "");
  const [erroEmail, setErroEmail] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const [textAreaEdit, setTextAreaEdit] = useState(user ? user.descricao : "");

  const [role, setRole] = useState(user ? user.role : "");

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

  const handleTextArea = (e) => {
    setTextAreaEdit(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enviando o formulário");
    console.log("enviando o formulário");
    console.log("Nome:", valueName);
    console.log("Email:", valueEmail);
    console.log("Descrição:", textAreaEdit);
    console.log("Função:", role);
  };

  const handleResetForms = () => {
    setValueName("");
    setValueEmail("");
    setTextAreaEdit("");
  };

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

          {nameValid && (
            <p className="text-green-500 text-sx pl-2">Nome válido!</p>
          )}
          {exibirErro && (
            <p className="text-red-500 text-xs pl-2">Digite um nome válido</p>
          )}
        </div>

        <div className="pt-2">
          <label>
            <p>Email:</p>
            <input
              type="text"
              className="w-full h-[38px] border rounded-md pl-2 outline-none"
              placeholder="Digite seu email"
              value={valueEmail}
              onChange={(e) => setValueEmail(e.target.value)}
              onKeyUp={validarEmail}
            />
          </label>

          {erroEmail && (
            <p className="text-red-500 text-sx pl-2">Digite um email válido!</p>
          )}
          {validEmail && (
            <p className="text-green-500 text-sx pl-2">Email valido!</p>
          )}
        </div>

        <div className="pt-5">
          <label>
            <p>Descrição sobre você: </p>
            <textarea
              cols="30"
              rows="10"
              value={textAreaEdit}
              className="w-full h-[300px] border rounded-md outline-none pl-2 text-lg"
              onChange={handleTextArea}
            ></textarea>
          </label>
        </div>

        <div className="pt-6">
          <label>
            <p>Função no sistema: </p>
            <select
              name="role"
              className="outline-none"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option value="usuario">Usuário</option>
              <option value="editor">Editor</option>
              <option value="programador">Programador</option>
            </select>
          </label>
        </div>

        <div className="flex justify-center pt-5">
          <button
            type="submit"
            className="border py-2 px-4 rounded-md"
            onClick={handleResetForms}
          >
            <p>Concluir Cadastro</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
