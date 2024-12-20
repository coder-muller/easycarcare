import { useState, useEffect } from "react"

interface Service {
  externa: boolean,
  code: string,
  nome: string,
  desc: string,
  produtos: string,
}

export default function ItemServices() {

  const [services, setServices]: Service[] = useState([])
  const [loading, setLoading]: boolean = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:3000/servico")
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da agenda")
        }
        const data = await response.json()
        setServices(data)
      } catch (error) {
        console.error("Erro:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])


  const listaServicosExterna = services.filter(servico => servico.externa)
  const listaServicosInterna = services.filter(servico => !servico.externa)

  return (
    <>
      {
        loading ? (
          <p> Carregando...</p >
        ) :

          <div className="flex flex-col">
            <button className="bg-blue-950 text-white py-2 px-4 rounded-lg m-auto mt-8">Adicionar serviço</button>
            <div className="m-auto my-3 flex flex-row justify-between items-center">
              <div className="flex flex-col w-2/5">
                <h1 className="text-3xl font-bold text-center">Serviços Externos</h1>
                {listaServicosExterna.map(servico => (
                  <section className="flex text-sm">
                    <div key={servico.nome} className="bg-blue-950 text-white my-6 lg:my-8 pl-4 flex flex-row border-r rounded-r-lg border-l rounded-l-lg">
                      <div className="py-4">
                        <h2 className="uppercase text-lg text-center font-bold">{servico.nome}</h2>
                        <p>{servico.desc}</p>
                        <p>Produtos utilizados: {servico.produtos}</p>
                      </div>
                      <img src={`${servico.code}.png`} width="180px" height="125px" className="border-r rounded-r-lg" />
                    </div>
                  </section>
                ))}
              </div>
              <div className="flex flex-col w-2/5">
                <h1 className="text-3xl font-bold text-center">Serviços Internos</h1>
                {listaServicosInterna.map(servico => (
                  <section className="flex text-sm">
                    <div key={servico.nome} className="bg-blue-950 text-white my-6 lg:my-8 pl-4 flex flex-row border-r rounded-r-lg border-l rounded-l-lg">
                      <div className="py-4">
                        <h2 className="uppercase text-lg text-center font-bold">{servico.nome}</h2>
                        <p>{servico.desc}</p>
                        <p>Produtos utilizados: {servico.produtos}</p>
                      </div>
                      <img src={`${servico.code}.png`} width="180px" height="125px" className="border-r rounded-r-lg" />
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
      }
    </>
  )
}
