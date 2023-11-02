import './Team.css'
import Collaborator from '../Collaborator'

const Team = ({team, collaborators, onDelete}) => {

  const cssSection = {backgroundColor: team.secondColor}
  const cssH3 = {borderColor: team.primaryColor}

  return (
    (collaborators.length > 0) && <section className='team' style={cssSection}>
      <h3 style={cssH3}>{team.name}</h3>
      <div className='collaborators'>
        {collaborators.map((collaborator, index) =>
          <Collaborator
            key={index}
            collaborator={collaborator}
            backgroundColor={team.primaryColor}
            onDelete={onDelete}
          />
        )}
      </div>
    </section>
  )
}

export default Team