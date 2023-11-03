import './Field.css';

const Field = ({
  label,
  required = false,
  type = 'text',
  placeholder = '',
  value, 
  onChange
}) => {

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  )
}

export default Field