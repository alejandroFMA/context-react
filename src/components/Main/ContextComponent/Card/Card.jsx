import React from "react";

const Card = ({user}) => {

  const { email, nombre, url, edad } = user;
  
  console.log(user)

  return <article>
    <ul>

  <li>Email: {email}</li>
  <li>Nombre: {nombre}</li>
  <li> Foto: <img src={url}></img></li>
  <li> Edad: {edad}</li>

  </ul>

  </article>;
};

export default Card;
