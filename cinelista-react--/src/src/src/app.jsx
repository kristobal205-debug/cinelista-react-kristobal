import { useState } from 'react'
import { peliculas } from './data/peliculas'
import ListaPeliculas from './components/ListaPeliculas'
import FiltroClasificacion from './components/FiltroClasificacion'

function App() {
  const [filtro, setFiltro] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  // Normalizar búsqueda: recortar espacios y limitar a 50 caracteres
  const busquedaNormalizada = busqueda.trim().slice(0, 50).toLowerCase()

  const peliculasFiltradas = peliculas.filter((p) => {
    const coincideClasificacion = filtro === 'Todas' || p.clasificacion === filtro
    const coincideBusqueda = p.titulo.toLowerCase().includes(busquedaNormalizada)
    return coincideClasificacion && coincideBusqueda
  })

  const peliculasHoy = peliculas.filter((p) => p.funcionHoy).length

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'white', padding: '20px' }}>
        🎬 CineLista
      </h1>

      <p style={{ textAlign: 'center', color: 'gold', margin: '0 0 16px' }}>
        🎟️ {peliculasHoy} película{peliculasHoy !== 1 ? 's' : ''} en función hoy
      </p>

      {/* Campo de búsqueda controlado */}
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Buscar por título..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          maxLength={50}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            width: '280px',
            fontSize: '1rem',
            outline: 'none',
          }}
        />
      </div>

      {/* Filtro por clasificación */}
      <FiltroClasificacion
        filtroActual={filtro}
        onFiltroChange={setFiltro}
      />

      {/* Renderizado condicional: sin resultados */}
      {peliculasFiltradas.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#aaa', marginTop: '40px', fontSize: '1.2rem' }}>
          😕 No hay películas que coincidan
        </p>
      ) : (
        <ListaPeliculas peliculas={peliculasFiltradas} />
      )}
    </div>
  )
}

export default App
