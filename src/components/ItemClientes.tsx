import { useState, useEffect } from "react";
interface Carro {
  marca: string;
  modelo: string;
  placa: string;
  cor: string;
}
interface Cliente {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  carro: Carro[];
}

export default function ItemClientes() {

  const [clientes, setClientes]: Cliente[] = useState([])
  const [loading, setLoading]: boolean = useState(true)

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch("http://localhost:3000/cliente")
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da agenda")
        }
        const data = await response.json()
        setClientes(data)
      } catch (error) {
        console.error("Erro:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchClientes()
  }, [])


  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <h1>Clientes</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {clientes.map(cliente => (
              <div key={cliente.nome} className="bg-blue-950 text-white my-6 lg:my-8 py-2 px-4">
                <h2 className="uppercase text-xl text-center font-bold">{cliente.nome}</h2>
                <div className="my-4">
                  <p>Telefone: {cliente.telefone}</p>
                  <p>Email: {cliente.email}</p>
                  <p>Endereço: {cliente.endereco}</p>
                  <p>Carros:</p>
                  <ul>
                    {cliente.carro.map(carro => (
                      <li key={carro.placa}>{carro.marca} {carro.modelo} ({carro.placa}) - Cor: {carro.cor}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div >

      )

      }
    </>
  )
}
