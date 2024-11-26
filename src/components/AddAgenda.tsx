import { useForm } from "react-hook-form"
import { Carro } from './ItemAgenda'
interface AddAgendaProps {
  carros: Carro[]
  setCarros: React.Dispatch<React.SetStateAction<Carro[]>>
}

export default function AddAgenda({ carros, setCarros }: AddAgendaProps) {
  const { register, handleSubmit } = useForm()

  function addItem(data: Carro) {
    const itemNovo = {
      status: "",
      modelo: data.modelo,
      placa: data.placa,
      cliente: data.cliente,
      tempoRestante: "",
      equipe: data.equipe,
      servico: data.servico,
      etapaRealizada: "",
      proximaEtapa: ""
    }

    const item2 = [itemNovo, ...carros]
    setCarros(item2)
    localStorage.setItem("carros", JSON.stringify(item2))
  }

  return (
    <div>
      <h1>Adicionar novo item à agenda</h1>
      <form onSubmit={handleSubmit(addItem)}>
        <p>
          <label htmlFor="modelo">Modelo:</label>
          <input
            type="text"
            id="modelo"
            {...register("modelo")}
          />
        </p>
        <p>
          <label htmlFor="placa">Placa:</label>
          <input
            type="text"
            id="placa"
            {...register("placa")}
          />
        </p>
        <p>
          <label htmlFor="cliente">Cliente:</label>
          <input
            type="text"
            id="cliente"
            {...register("cliente")}
          />
        </p>
        <p>
          <label htmlFor="equipe">Selecionar equipe:</label>
          <select id="equipe" {...register("equipe")}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </p>
        <p>
          <label htmlFor="servicos">Selecionar serviço:</label>
          <select id="servicos" {...register("servicos")}>
            <option value="externa">Externa</option>
            <option value="interna">Interna</option>
          </select>
        </p>
        <p>
          <input type="submit" value="Adicionar à Agenda" />
          <input type="reset" value="Limpar formulário" />
        </p>

      </form>
    </div>
  )

}
