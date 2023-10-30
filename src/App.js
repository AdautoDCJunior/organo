import Form from './components/Form';
import Banner from './components/Banner';
import { useState } from 'react';

function App() {

  const [collaborators, setCollaborators] = useState([])

  return (
    <div className="App">
      <Banner />
      <Form onAddingCollaborators={collaborator => setCollaborators([...collaborators, collaborator])}/>
    </div>
  );
}

export default App;
