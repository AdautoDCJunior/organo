import './Form.css'

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button';
import TextField from '../TextField';
import ColorField from '../ColorField';
import DropdownList from '../DropdownList';

const Form = (props) => {

  const teams = props.teams.map(team => team.name)

  const [collaboratorName, setCollaboratorName] = useState('')
  const [collaboratorRole, setCollaboratorRole] = useState('')
  const [collaboratorImage, setCollaboratorImage] = useState('')
  const [collaboratorTeam, setCollaboratorTeam] = useState('')

  const [teamName, setTeamName] = useState('')
  const [teamColor, setTeamColor] = useState('#000000')


  const onAddCollaborator = event => {
    event.preventDefault()

    const id = uuidv4()

    props.onAddingCollaborators({
      id,
      name: collaboratorName,
      role: collaboratorRole,
      image: collaboratorImage,
      team: collaboratorTeam
    })

    setCollaboratorName('')
    setCollaboratorRole('')
    setCollaboratorImage('')
    setCollaboratorTeam('')
  }

  const onAddTeam = event => {
    event.preventDefault()

    const id = uuidv4()

    props.onAddingTeam({
      id,
      name: teamName,
      color: teamColor
    })

    setTeamName('')
    setTeamColor('#000000')
  }

  return (
    <section className='form'>
      <form onSubmit={onAddCollaborator}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label='Nome'
          placeholder='Digite seu nome'
          value={collaboratorName}
          onChange={value => setCollaboratorName(value)}
        />
        <TextField
          required={true}
          label='Cargo'
          placeholder='Digite seu cargo'
          value={collaboratorRole}
          onChange={value => setCollaboratorRole(value)}
        />
        <TextField
          required={false}
          label='Imagem'
          placeholder='Informe o endereço da imagem'
          value={collaboratorImage}
          onChange={value => setCollaboratorImage(value)}
        />
        <DropdownList
          required={true}
          label='Time'
          items={teams}
          value={collaboratorTeam}
          onChange={value => setCollaboratorTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
      <form onSubmit={onAddTeam}>
        <h2>Preencha os dados para criar o um novo time</h2>
        <TextField
          required={true}
          label='Nome'
          placeholder='Digite o nome do time'
          value={teamName}
          onChange={value => setTeamName(value)}
        />
        <ColorField
          label='Cor'
          value={teamColor}
          onChange={value => setTeamColor(value)}
        />
        <Button>Criar Time</Button>
      </form>
    </section>
  )
}

export default Form