import { useState } from 'react';

import Form from './components/Form';
import Team from './components/Team';
import Banner from './components/Banner';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondColor: '#FFEEDF'
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams}
        onAddingCollaborators={collaborator =>
          setCollaborators([...collaborators, collaborator])
        }
      />
      {teams.map(team =>
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondColor={team.secondColor}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
        />
      )}
    </div>
  );
}

export default App;
