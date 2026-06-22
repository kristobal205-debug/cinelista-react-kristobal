import PropTypes from 'prop-types'

const clasificaciones = ['Todas', 'TE', '+14', '+18']

function FiltroClasificacion({ filtroActual, onFiltroChange }) {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
      {clasificaciones.map((c) => (
        <button
          key={c}
          onClick={() => onFiltroChange(c)}
          style={{
            padding: '8px 20px',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: filtroActual === c ? 'gold' : '#333',
            color: filtroActual === c ? 'black' : 'white',
          }}
        >
          {c}
        </button>
      ))}
    </div>
  )
}

FiltroClasificacion.propTypes = {
  filtroActual:   PropTypes.string.isRequired,
  onFiltroChange: PropTypes.func.isRequired,
}

export default FiltroClasificacion