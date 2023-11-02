import { useState } from 'react';

import Form from './components/Form';
import Team from './components/Team';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {

  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      color: '#57C278'
    },
    {
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      name: 'DevOps',
      color: '#E06B69'
    },
    {
      name: 'UX e Design',
      color: '#DB6EBF'
    },
    {
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      color: '#FF8A29'
    }
  ])

  const [collaborators, setCollaborators] = useState([
    {
      name: 'Adauto Júnior',
      role: 'Engenheiro(a) de Dados',
      image: 'https://github.com/AdautoDCJunior.png',
      team: 'Programação'
    },
    {
      name: 'Mariana Campos',
      role: 'Desenvolvedor(a) FrontEnd',
      image: 'https://github.com/marianac-campos.png',
      team: 'Programação'
    },
    {
      name: 'Luís Eduardo',
      role: 'Desenvolvedor(a) BackEnd',
      image: 'https://github.com/LCamposDev.png',
      team: 'Programação'
    },
    {
      name: 'Adauto Júnior',
      role: 'Engenheiro(a) de Dados',
      image: 'https://github.com/AdautoDCJunior.png',
      team: 'Front-End'
    },
    {
      name: 'Mariana Campos',
      role: 'Desenvolvedor(a) FrontEnd',
      image: 'https://github.com/marianac-campos.png',
      team: 'Front-End'
    },
    {
      name: 'Luís Eduardo',
      role: 'Desenvolvedor(a) BackEnd',
      image: 'https://github.com/LCamposDev.png',
      team: 'Front-End'
    },
    {
      name: 'Adauto Júnior',
      role: 'Engenheiro(a) de Dados',
      image: 'https://github.com/AdautoDCJunior.png',
      team: 'Data Science'
    },
    {
      name: 'Mariana Campos',
      role: 'Desenvolvedor(a) FrontEnd',
      image: 'https://github.com/marianac-campos.png',
      team: 'Data Science'
    },
    {
      name: 'Luís Eduardo',
      role: 'Desenvolvedor(a) BackEnd',
      image: 'https://github.com/LCamposDev.png',
      team: 'Data Science'
    }
  ])

  const addCollaborator = collaborator => {
    setCollaborators([...collaborators, collaborator])
  }

  const deleteCollaborator = () => {
    console.log('Deleta colaborador')
  }

  const updateTeam = (name, color) => {
    setTeams(teams.map(team => {
      if(team.name === name) {
        team.color = color
      }

      return team
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams} onAddingCollaborators={addCollaborator}/>
      {teams.map(team =>
        <Team
          key={team.name}
          team={team}
          collaborators={collaborators.filter(collaborator =>
            collaborator.team === team.name
          )}
          onUpdatingTeam={updateTeam}
          onDelete={deleteCollaborator}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
