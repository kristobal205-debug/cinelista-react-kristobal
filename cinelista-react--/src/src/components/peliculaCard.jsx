import PropTypes from 'prop-types'

const coloresClasificacion = {
  'TE':  { fondo: '#2e7d32', texto: 'white' },
  '+14': { fondo: '#e65100', texto: 'white' },
  '+18': { fondo: '#b71c1c', texto: 'white' },
}

function PeliculaCard({ titulo, genero, duracion, clasificacion, sinopsis, horarios, funcionHoy }) {
  const estilo = coloresClasificacion[clasificacion] || { fondo: '#555', texto: 'white' }

  return (
    <div style={{
      border: funcionHoy ? '3px solid gold' : '1px solid #ccc',
      borderRadius: '10px',
      padding: '16px',
      margin: '12px',
      maxWidth: '340px',
      backgroundColor: '#1a1a2e',
      color: 'white',
      position: 'relative'
    }}>

      {/* Etiqueta HOY */}
      {funcionHoy && (
        <span style={{
          position: 'absolute', top: '10px', right: '10px',
          backgroundColor: 'gold', color: 'black',
          fontWeight: 'bold', padding: '2px 8px', borderRadius: '4px',
          fontSize: '0.75rem'
        }}>
          HOY
        </span>
      )}

      {/* Clasificación */}
      <span style={{
        backgroundColor: estilo.fondo,
        color: estilo.texto,
        padding: '2px 10px',
        borderRadius: '4px',
        fontSize: '0.8rem',
        fontWeight: 'bold'
      }}>
        {clasificacion}
      </span>

      <h2 style={{ margin: '10px 0 4px' }}>{titulo}</h2>
      <p style={{ margin: '2px 0', color: '#aaa' }}>{genero} · {duracion} min</p>
      <p style={{ margin: '8px 0', fontSize: '0.9rem' }}>{sinopsis}</p>

      <p style={{ margin: '6px 0', fontWeight: 'bold' }}>Horarios:</p>
      <ul style={{ margin: 0, paddingLeft: '18px' }}>
        {horarios.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  )
}

PeliculaCard.propTypes = {
  titulo:         PropTypes.string.isRequired,
  genero:         PropTypes.string.isRequired,
  duracion:       PropTypes.number.isRequired,
  clasificacion:  PropTypes.string.isRequired,
  sinopsis:       PropTypes.string.isRequired,
  horarios:       PropTypes.arrayOf(PropTypes.string).isRequired,
  funcionHoy:     PropTypes.bool,
}

PeliculaCard.defaultProps = {
  funcionHoy: false,
}

export default PeliculaCard