import { useState } from 'react';
import Card from './Card/Card'; 
import Form from './Form/Form'; 



function ContextComponent() {
  const [user, setUser] = useState({ email: '', nombre: '', url: '', edad: '' });


  return (
    <>
      <Form setUser={setUser} user={user}/> 
      <Card user={user}/>
    </>
  );
}

export default ContextComponent;
