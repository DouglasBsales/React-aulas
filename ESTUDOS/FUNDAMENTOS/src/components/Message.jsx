const Message = ({msg, handleMessage}) => {

    const messages = ["Oi", "Olá", "Oi, tudo bem?"]

  return (
    <div>
      <p>A mensagem é: {msg}</p>
      <div className="flex gap-4">
        <button className="border py-2 px-4 rounded-md" onClick={()=> handleMessage(messages[0])}>1</button>
        <button className="border py-2 px-4 rounded-md" onClick={()=> handleMessage(messages[1])}>2</button>
        <button className="border py-2 px-4 rounded-md" onClick={()=> handleMessage(messages[2])}>3</button>
      </div>
    </div>
  )
}

export default Message
