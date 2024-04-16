import Challenge from "../components/Challenmge";
import Events from "../components/Events";
import FirstComponent from "../components/FirstComponent";
import ListaRender from "../components/ListaRender";
import MyComponent from "../components/MyComponent";
import TemplateExpressions from "../components/TemplateExpressions";



export default function App() {

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
        <div>
          <Events />
        </div>
        <div>
          <Challenge />
        </div>
        <div>
          <ListaRender />
        </div>
      </div>
    </>
  );
}
