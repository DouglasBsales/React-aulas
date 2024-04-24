import { useState } from "react";

const url = "http://localhost:3000/products"
// 4 CUSTOM HOOKS

import { useFetch } from "./hooks/useFetch";

function App() {
  const [products, setProducts] = useState([]);

  const { dados: items } = useFetch(url);

  const [valueName, setValueName] = useState("");
  const [valuePrice, setValuePrice] = useState("");

  // METHOD POST UTILIZADO

  const handleNewProduct = async () => {
    if (!valueName.trim() || !valuePrice.trim()) {
      alert("Adicione um produto e um valor");
      return;
    }

    const product = {
      name: valueName,
      price: valuePrice,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    });

    alert("Produto adicionado com sucesso");

    // Carregamento dinâmico

    const newProduct = await response.json();
    setProducts((prevProducts) => [...prevProducts, newProduct]);

    setValueName("");
    setValuePrice("");
  };

  const handleDelete = async (id) => {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    alert("Produto deletado!");

    setProducts(products.filter((products) => products.id !== id));
  };

  console.log(products);

  return (
    <div className="flex flex-col items-center justify-center pt-12">
      <h1 className="text-4xl text-[#202020] font-semibold">
        Lista de produtos
      </h1>

      <div className="pt-32">
        <div className="flex flex-col gap-4">
          {items && items.map((elemento) => (
            <div key={elemento.id} className="flex gap-3">
              <p>{elemento.name}</p>
              <p>R$: {parseFloat(elemento.price).toFixed(2)}</p>
              <button
                className="border rounded-md  px-4"
                onClick={() => handleDelete(elemento.id)}
              >
                <p>Delete</p>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex gap-1 pt-5">
          <p>Nome do produto:</p>
          <input
            type="text"
            className="border rounded-md outline-none pl-1"
            value={valueName}
            onChange={(e) => setValueName(e.target.value)}
          />
        </div>
        <div className="flex gap-1 pt-5">
          <p>Preço do produto:</p>
          <input
            type="number"
            className="border rounded-md outline-none pl-1"
            value={valuePrice}
            onChange={(e) => setValuePrice(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button
          className="py-2 px-4 border rounded-md"
          onClick={handleNewProduct}
        >
          <p>Adicionar produto</p>
        </button>
      </div>
    </div>
  );
}

export default App;
