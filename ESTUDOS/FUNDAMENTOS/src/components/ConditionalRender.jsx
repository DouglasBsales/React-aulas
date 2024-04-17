import { useState } from "react";

const Conditionalrender = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex pb-10 gap-5">
      <div
        className={`py-2 px-4 rounded-md border ${
          isActive ? "bg-[#202020] text-[#fff]" : "" }`}
      >
        irá mudar de cor !
      </div>
      <button className="py-2 px-4 rounded-md border" onClick={handleClick}>
        <p>Clique aqui para mudar</p>
      </button>
    </div>
  );
};

export default Conditionalrender;
