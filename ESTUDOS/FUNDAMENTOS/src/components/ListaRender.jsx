import { useState } from "react";

const ListaRender = () => {
  const [users] = useState([
    { nome: "Douglas sales", age: 25, id: 131414 },
    { nome: "Rayelle amorim", age: 18, id: 131234 },
  ]);

  return (
    <div className="flex flex-col items-center">
      <p>Lista sendo renderizada abaixo: </p>
      <div className="pt-8 pb-8">
        {users.map((elemento) => (
          <div key={elemento.id}>
            <p>
              Nome: {elemento.nome}, Idade: {elemento.age}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaRender;
