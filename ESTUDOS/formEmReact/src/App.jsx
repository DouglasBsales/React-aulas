import MyForm from "./Components/MyForm";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-[100px]">
      <h1 className="text-5xl">Forms!</h1>
      <div>
        <MyForm />
      </div>
    </div>
  );
}

export default App;
