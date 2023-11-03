import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from './components/Form';
import Team from './components/Team';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'DevOps',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29'
    }
  ])

  const [collaborators, setCollaborators] = useState([
    {
      id: uuidv4(),
      favorite: true,
      name: 'Adauto Júnior',
      role: 'Engenheiro(a) de Dados',
      image: 'https://github.com/AdautoDCJunior.png',
      team: 'Programação'
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Mariana Campos',
      role: 'Desenvolvedor(a) FrontEnd',
      image: 'https://github.com/marianac-campos.png',
      team: 'Programação'
    },
    {
      id: uuidv4(),
      favorite: true,
      name: 'Luís Eduardo',
      role: 'Desenvolvedor(a) BackEnd',
      image: 'https://github.com/LCamposDev.png',
      team: 'Programação'
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Adauto Júnior',
      role: 'Engenheiro(a) de Dados',
      image: 'https://github.com/AdautoDCJunior.png',
      team: 'Front-End'
    },
    {
      id: uuidv4(),
      favorite: true,
      name: 'Mariana Campos',
      role: 'Desenvolvedor(a) FrontEnd',
      image: 'https://github.com/marianac-campos.png',
      team: 'Front-End'
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Luís Eduardo',
      role: 'Desenvolvedor(a) BackEnd',
      image: 'https://github.com/LCamposDev.png',
      team: 'Front-End'
    },
    {
      id: uuidv4(),
      favorite: true,
      name: 'Adauto Júnior',
      role: 'Engenheiro(a) de Dados',
      image: 'https://github.com/AdautoDCJunior.png',
      team: 'Data Science'
    },
    {
      id: uuidv4(),
      favorite: true,
      name: 'Mariana Campos',
      role: 'Desenvolvedor(a) FrontEnd',
      image: 'https://github.com/marianac-campos.png',
      team: 'Data Science'
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Luís Eduardo',
      role: 'Desenvolvedor(a) BackEnd',
      image: 'https://github.com/LCamposDev.png',
      team: 'Data Science'
    }
  ])

  const addCollaborator = collaborator => {
    setCollaborators([...collaborators, collaborator])
  }

  const favoriteCollaborator = (id) => {
    setCollaborators(collaborators.map(collaborator => {
      if(collaborator.id === id) {
        collaborator.favorite = !collaborator.favorite
      }

      return collaborator
    }))
  }

  const deleteCollaborator = (id) => {
    setCollaborators(collaborators.filter(collaborator => 
      collaborator.id !== id
    ))
  }

  const addTeam = team => {
    setTeams([...teams, team])
  }

  const updateTeamColor = (id, color) => {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color
      }

      return team
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams}
        onAddingCollaborators={addCollaborator}
        onAddingTeam={addTeam}
      />
      {teams.map(team =>
        <Team
          key={team.name}
          team={team}
          collaborators={collaborators.filter(collaborator =>
            collaborator.team === team.name
          )}
          onUpdatingTeamColor={updateTeamColor}
          onFavoriteCollaborator={favoriteCollaborator}
          onDeleteCollaborator={deleteCollaborator}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
