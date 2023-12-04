import { UserContext } from '../../App';
import { useContext } from 'react'; 

function Header() {
  
  const { email } = useContext(UserContext);

  console.log(email)
 
  return <header>Hola, {email}</header>;
}


export default Header;
