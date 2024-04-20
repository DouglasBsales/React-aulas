const UsersDetails = ({ nome, age, prof,}) => {
  return (
    <div className="flex flex-col border py-2 px-4 rounded-md">
      <p>Nome: {nome}</p>
      <p>Idade: {age}</p>
      <p>Profissão: {prof}</p>
      {age >= 18 ? (<p>Pode tirar carteira de motorista</p>) : ""}
    </div>
  );
};

export default UsersDetails;
