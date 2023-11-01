import './Collaborator.css'

const Collaborator = ({name, role, image}) => {
  return (
    <div className='collaborator'>
      <div className='header'>
        <img src={image} alt='Adauto Júnior'/>
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  )
}

export default Collaborator