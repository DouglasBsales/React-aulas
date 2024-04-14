const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("O click funcionou");
  };

  const renderSomethyng = (x)=>{
    if(x){
      return <h1>Renderizo isso</h1>
    }else{
      return <h1>Também posso renderizar isso!</h1>
    }
  }


  return (
    <div className="flex flex-col items-center gap-5">
      <div>
        <button onClick={handleMyEvent} className="border py-2 px-4 rounded-md">
          <p>Clique aqui</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => console.log("Click funcionou também")}
          className="border py-2 px-4 rounded-md"
        >
          <p>Clique aqui também</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            if (true) {
              console.log("Isso nao deveria existir :)");
            }
          }}
          className="border py-2 px-4 rounded-md"
        >
          <p>Clique aqui também</p>
        </button>
      </div>
      {renderSomethyng(true)}
      {renderSomethyng(false)}
    </div>
  );
};

export default Events;
