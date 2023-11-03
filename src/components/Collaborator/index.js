import './Collaborator.css'

import { AiFillCloseCircle } from 'react-icons/ai';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

const collaborator = ({collaborator, backgroundColor, onFavorite, onDelete}) => {
  
  const propsFavorite = {
    className: 'collaborator-favorite',
    size: 25,
    onClick: () => onFavorite(collaborator.id)
  }

  return (
    <div className='collaborator'>
      <AiFillCloseCircle
        className='collaborator-delete'
        size={25}
        onClick={() => onDelete(collaborator.id)}
      />
      {collaborator.favorite 
        ? <MdOutlineFavorite {...propsFavorite}/>
        : <MdOutlineFavoriteBorder {...propsFavorite}/>
      }
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