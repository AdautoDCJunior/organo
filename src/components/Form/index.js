import { useState } from 'react';

import './Form.css'
import Button from '../Button';
import TextField from '../TextField';
import DropdownList from '../DropdownList';

const Form = (props) => {

  const teams = props.teams.map(team => team.name)

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')


  const onSave = (event) => {
    event.preventDefault()
    props.onAddingCollaborators({name, role, image, team})
  }

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label='Nome'
          placeholder='Digite seu nome'
          value={name}
          onChange={value => setName(value)}
        />
        <TextField
          required={true}
          label='Cargo'
          placeholder='Digite seu cargo'
          value={role}
          onChange={value => setRole(value)}
        />
        <TextField
          required={false}
          label='Imagem'
          placeholder='Informe o endereço da imagem'
          value={image}
          onChange={value => setImage(value)}
        />
        <DropdownList
          required={true}
          label='Time'
          items={teams}
          value={team}
          onChange={value => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  )
}

export default Form