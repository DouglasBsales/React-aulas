import { useState } from "react";
import CarDetails from "../components/CarDetails";
import Challenge from "../components/Challenmge";
import Conditionalrender from "../components/ConditionalRender";
import Container from "../components/Container";
import Events from "../components/Events";
import FirstComponent from "../components/FirstComponent";
import Fragments from "../components/Fragments";
import ListaRender from "../components/ListaRender";
import MyComponent from "../components/MyComponent";
import ShowUserName from "../components/ShowUserName";
import TemplateExpressions from "../components/TemplateExpressions";
import Message from "../components/Message";
import UsersDetails from "../components/UsersDetails";

export default function App() {
  const cars = [
    { id: "13613", marca: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    {
      id: "1Vgh533",
      marca: "Golf",
      color: "Vermelho",
      newCar: false,
      km: 23733,
    },
    {
      id: "1361asdBtgfsd3",
      marca: "Uno",
      color: "Azul",
      newCar: false,
      km: 73623,
    },
    {
      id: "1ysgdayd",
      marca: "Lamborguini Avenger",
      color: "Black piano",
      newCar: true,
      km: 0,
    },
  ];

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const [users] = useState([
    { id: "Gsd2376", nome: "Douglas", age: 25, prof: "Programador" },
    { id: "jkasd%147sd", nome: "Rayelle", age: 18, prof: "Biomédica" },
    { id: "16had83", nome: "Cláudio", age: 17, prof: "Ainda não tem" },
  ]);

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 gap-7">
        <h1 className="text-6xl">Fundamento REACT </h1>
        <p className="text-3xl">
          <TemplateExpressions />
        </p>
        <div className="flex flex-col items-center gap-6">
          <FirstComponent />
          <MyComponent />
        </div>
        <Events />
        <Challenge />
        <ListaRender />
        <Conditionalrender />
        <ShowUserName name="Douglas" age={27} newCar={false} />
        <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true} />
        <CarDetails brand="Fiat" color="Branco" km={37000} newCar={false} />
        
        {cars.map((car) => (
          <CarDetails
            brand={car.marca}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
        <Fragments />
        <Container>
          <p>Eu sou filho do componente</p>
        </Container>
        <Message msg={message} handleMessage={handleMessage} />

        {users.map((elemento) => (
          <UsersDetails
            nome={elemento.nome}
            age={elemento.age}
            prof={elemento.prof}
            id={elemento.id}
          />
        ))}
      </div>
    </>
  );
}
