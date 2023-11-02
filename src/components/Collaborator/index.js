import './Collaborator.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const collaborator = ({collaborator, backgroundColor, onDelete}) => {
  return (
    <div className='collaborator'>
      <AiFillCloseCircle size={25} className='collaborator-delete' onClick={onDelete} />
      <div
        className='collaborator-header'
        style={{backgroundColor: backgroundColor}}
      >
        <img src={collaborator.image} alt={collaborator.name}/>
      </div>
      <div className='collaborator-footer'>
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.role}</h5>
      </div>
    </div>
  )
}

export default collaborator