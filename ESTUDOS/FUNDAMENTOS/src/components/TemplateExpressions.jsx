const TemplateExpressions = ()=>{

    const pessoa = {
        name: "Douglas", 
        profissao: " Programmer"
    }

    return (
        <div className="flex flex-col items-center">
            <p>
                Olá, me chamo {pessoa.name}
            </p>
            <p>E atuo como: {pessoa.profissao}</p>
        </div>
    )
}

export default TemplateExpressions