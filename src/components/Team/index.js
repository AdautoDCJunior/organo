import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {

  const cssSection = {backgroundColor: props.secondColor}
  const cssH3 = {borderColor: props.primaryColor}

  return (
    <section className='team' style={cssSection}>
      <h3 style={cssH3}>{props.name}</h3>
      <div className='collaborators'>
        {props.collaborators.map(collaborator => 
          <Collaborator
            name={collaborator.name}
            role={collaborator.role}
            image={collaborator.image}
          />
        )}
      </div>
    </section>
  )
}

export default Team