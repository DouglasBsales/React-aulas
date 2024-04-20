import ListNotes from "./components/ListNotes";
import "./index.css";

export default function App() {
  return (
    <div className="w-[375px] lg:w-[750px] flex flex-col items-center pt-[40px]">
        <div>
          <p className="text-3xl font-semibold text-[#575757] pb-[18px]">
            TO DO LIST
          </p>
        </div>
        <ListNotes />
    </div>
  );
}
