import HextoRgba from 'hex-to-rgba'

import './Team.css'
import Collaborator from '../Collaborator'

const Team = ({
  team,
  collaborators,
  onUpdatingTeamColor,
  onFavoriteCollaborator,
  onDeleteCollaborator
}) => {

  const cssSection = {backgroundColor: HextoRgba(team.color, '0.6')}
  const cssH3 = {borderColor: team.color}

  return (
    (collaborators.length > 0) && <section className='team' style={cssSection}>
      <input
        className='team-input-color'
        type='color'
        value={team.color}
        onChange={event => onUpdatingTeamColor(team.id, event.target.value)}
      />
      <h3 style={cssH3}>{team.name}</h3>
      <div className='collaborators'>
        {collaborators.map((collaborator, index) =>
          <Collaborator
            key={index}
            collaborator={collaborator}
            backgroundColor={team.color}
            onFavorite={onFavoriteCollaborator}
            onDelete={onDeleteCollaborator}
          />
        )}
      </div>
    </section>
  )
}

export default Team