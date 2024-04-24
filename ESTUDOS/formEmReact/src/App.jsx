import MyForm from "./Components/MyForm";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-[100px]">
      <h1 className="text-5xl">Forms!</h1>
      <div>
        <MyForm
          user={{
            name: "Douglas",
            email: "dougsales.dev@gmail.com",
            descricao:
              "Maria é uma mulher de estatura média, com cabelos castanhos ondulados que caem suavemente sobre seus ombros. Seus olhos castanhos são vivos e expressivos, refletindo sua curiosidade inata pelo mundo ao seu redor. Sua pele tem um tom aveludado e uma suave sardas pontilham suas bochechas, dando-lhe um ar jovial e acolhedor. Ela possui um sorriso caloroso que ilumina seu rosto, e sua voz é suave e reconfortante, transmitindo empatia e compreensão. Maria é uma pessoa gentil e atenciosa, sempre pronta para ajudar os outros e compartilhar um momento de alegria. Sua paixão pela vida é evidente em sua energia contagiante e em sua disposição para enfrentar novos desafios com coragem e determinação.",
              role: "programador"
          }}
        />
      </div>
    </div>
  );
}

export default App;
