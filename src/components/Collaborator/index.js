import './Collaborator.css'

const Collaborator = ({name, role, image, backgroundColor}) => {
  return (
    <div className='collaborator'>
      <div
        className='collaborator-header'
        style={{backgroundColor: backgroundColor}}
      >
        <img src={image} alt='Adauto Júnior'/>
      </div>
      <div className='collaborator-footer'>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  )
}

export default Collaborator