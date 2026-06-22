import { peliculas } from './data/peliculas'
import ListaPeliculas from './components/ListaPeliculas'

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'white', padding: '20px' }}>
        🎬 CineLista
      </h1>
      <ListaPeliculas peliculas={peliculas} />
    </div>
  )
}

export default App
