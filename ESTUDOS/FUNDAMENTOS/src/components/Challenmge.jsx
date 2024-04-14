const Challenge = ()=>{

    const number1 = 2
    const number2 = 8

    return(
        <div>
            <div className="flex flex-col items-center">
                <p>Teremos dois números para serem somados</p>
                <p>1° número: {number1}</p>
                <p>2° número: {number2}</p>
            </div>

            <div>
        <button
          onClick={()=> console.log(number1 + number2)}
          className="border py-2 px-4 rounded-md"
        >
          <p>Clique aqui para somar os números </p>
        </button>
      </div>
        </div>
    )
}

export default Challenge