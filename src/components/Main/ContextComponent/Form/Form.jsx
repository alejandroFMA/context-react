import { useState, useContext } from "react";
import { UserContext } from '../../../../App'

const Form = ({setUser}) => {
  const [inputValue, setInputValue] = useState({ email: '', nombre: '', url: '', edad: '' })
  const { email, setEmail } = useContext(UserContext);


  
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    // setUser({ ...user, email: inputValue.email });
    setEmail(inputValue.email);

  };


  const handleSubmit =(e) => {
    e.preventDefault();
    setUser(inputValue);
  }


  return <form onSubmit={handleSubmit}>
  <label htmlFor="email">Email</label> 
  <input type="text" name="email" value={inputValue.email} onChange={handleChange}/>

  <label htmlFor="nombre">Nombre</label>
  <input type="text" name="nombre" value={inputValue.nombre} onChange={handleChange}/>

  <label htmlFor="url">Foto</label>
  <input type="text" name="url" value={inputValue.url} onChange={handleChange}/>

  <label htmlFor="edad">Edad</label>
  <input type="text" name="edad" value={inputValue.edad} onChange={handleChange}/>

  <button type="submit">Enviar</button>
  </form>;
};

export default Form;
