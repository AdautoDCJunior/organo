import './Team.css'
import Collaborator from '../Collaborator'

const Team = (props) => {

  const cssSection = {backgroundColor: props.secondColor}
  const cssH3 = {borderColor: props.primaryColor}

  return (
    (props.collaborators.length > 0) && <section className='team' style={cssSection}>
      <h3 style={cssH3}>{props.name}</h3>
      <div className='collaborators'>
        {props.collaborators.map(collaborator =>
          <Collaborator
            key={collaborator.name}
            name={collaborator.name}
            role={collaborator.role}
            image={collaborator.image}
            backgroundColor={props.primaryColor}
          />
        )}
      </div>
    </section>
  )
}

export default Team