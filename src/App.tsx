import ItemAgenda from "./components/ItemAgenda"
import Header from "./components/Header"
import { Modal } from "react-responsive-modal"
import "react-responsive-modal/styles.css"
import { useEffect, useState } from "react"
import AddAgenda from "./components/AddAgenda"
function App() {

  const [carros, setCarros] = useState([])
  const [open, setOpen]: boolean = useState(false)
  useEffect(() => {
    if (localStorage.getItem("carros")) {
      const carros2 = JSON.parse(localStorage.getItem("carros"))
      setCarros(carros2)
    }
  })
  function addAgenda() {
    setOpen(true)
  }
  return (
    <>
      <div className="m-8 my-3">
        <Header />
        <main>
          <div className="flex flex-col items-center justify-center">
            <img src="date-placeholder.png" alt="" className="my-6" />
            <p className="text-center border-y-black border-x-white border font-bold text-lg">11/11</p>
            <button onClick={addAgenda}>Adicionar à agenda</button>
            <Modal open={open} onClose={() => setOpen(false)} center>
              <AddAgenda carros={carros} setCarros={setCarros} />

            </Modal>

          </div>
        </main>
        <div className="flex flex-col lg:flex-row gap-8">
          <ItemAgenda />
        </div>
      </div>
    </>
  )
}

export default App
