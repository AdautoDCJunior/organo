import './ColorField.css';

const ColorField = ({ label, value, onChange }) => {
  return (
    <div className='color-field'>
      <label>{label}</label>
      <input
        type='color'
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  )
}

export default ColorField