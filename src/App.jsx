import { useState, createContext } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

export const UserContext = createContext();


function App() {
 
  const [email, setEmail] = useState('')


  return (
    <>
    <UserContext.Provider value={{email, setEmail}}>
      <Header />
      <Main/>
     <Footer />
    </UserContext.Provider>
      
     </>
  )
}

export default App
