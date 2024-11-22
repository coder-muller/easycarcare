// Placeholder, um dia isso aqui vai ser criado automaticamente
interface Carro {
  status: string;
  modelo: string;
  placa: string;
  cliente: string;
  tempoRestante: string;
  equipe: string;
  servico: string;
  etapaRealizada: string;
  proximaEtapa: string
}

const carros: Carro[] = []

export default function ItemAgenda() {
  const listaCarros = carros.map(carro => (
    <section className="flex xl:w-1/3">
      <div key={carro.placa} className="bg-blue-950 text-white my-6 lg:my-8 py-2 px-4">
        <h2 className="uppercase text-xl text-center font-bold">Etapa Atual: {carro.status}</h2>
        <img src={carro.modelo + ".png"} alt="Carro" className={`border-8 my-2 ${(carro.status == "Aguardando" ? 'border-red-700' : 'border-green-500')}`} />
        <div className="my-4">
          <p>Veículo: {carro.modelo} ({carro.placa})</p>
          <p>Cliente: {carro.cliente}</p>
          <p>Tempo restante: {carro.tempoRestante}</p>
          <p>Equipe: {carro.equipe}</p>
          <p>Tipo de serviço: {carro.servico}</p>
          <p>Etapas realizadas: {carro.etapaRealizada}</p>
          <p>Próximas etapas: {carro.proximaEtapa}</p>
        </div>
      </div>
    </section>
  ))

  return listaCarros
}
