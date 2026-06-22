import PropTypes from 'prop-types'
import PeliculaCard from './PeliculaCard'

function ListaPeliculas({ peliculas }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '16px'
    }}>
      {peliculas.map((pelicula) => (
        <PeliculaCard
          key={pelicula.id}
          titulo={pelicula.titulo}
          genero={pelicula.genero}
          duracion={pelicula.duracion}
          clasificacion={pelicula.clasificacion}
          sinopsis={pelicula.sinopsis}
          horarios={pelicula.horarios}
          funcionHoy={pelicula.funcionHoy}
        />
      ))}
    </div>
  )
}

ListaPeliculas.propTypes = {
  peliculas: PropTypes.arrayOf(PropTypes.shape({
    id:            PropTypes.number.isRequired,
    titulo:        PropTypes.string.isRequired,
    genero:        PropTypes.string.isRequired,
    duracion:      PropTypes.number.isRequired,
    clasificacion: PropTypes.string.isRequired,
    sinopsis:      PropTypes.string.isRequired,
    horarios:      PropTypes.arrayOf(PropTypes.string).isRequired,
    funcionHoy:    PropTypes.bool,
  })).isRequired,
}

export default ListaPeliculas
