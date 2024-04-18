
const CarDetails = ({brand, color, km , newCar}) => {
  return (
    <div>
      <div className="flex flex-col items-center border rounded-md  py-2 px-4">
        <h1 className="text-[#202020] text-3xl pb-4 font-semibold">Detalhes do carro: </h1>
        <p>Modelo do carro: {brand}</p>
        <p>Cor do carro: {color}</p>
        <p>Km do carro: {km}Km</p>
        {newCar && (<p className="font-bold text-red-500">Esse carro é novo</p>)}
      </div>
    </div>
  )
}

export default CarDetails
