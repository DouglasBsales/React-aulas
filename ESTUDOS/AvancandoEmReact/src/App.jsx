import TestandoImagens from "./components/TestandoImagens";
import IronMan from './assets/ironMan.png'
import ManageData from "./components/ManageData";
import TesteListas from "./components/TesteListas";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center pt-[100px]">
      <div>
        <p className="text-6xl">Avançando em React</p>
      </div>
      <TestandoImagens />
      <div>
        <img src={IronMan} alt="" className="w-28 h-28"/>
      </div>
      <ManageData />
      <TesteListas />
    </div>
  );
}
