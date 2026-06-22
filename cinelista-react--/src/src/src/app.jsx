import { peliculas } from './data/peliculas'
import PeliculaCard from './components/PeliculaCard'

function App() {
  const p = peliculas[0]
  return (
    <PeliculaCard
      titulo={p.titulo}
      genero={p.genero}
      duracion={p.duracion}
      clasificacion={p.clasificacion}
      sinopsis={p.sinopsis}
      horarios={p.horarios}
      funcionHoy={p.funcionHoy}
    />
  )
}

export default App
