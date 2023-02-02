import React from 'react';
import './home.scss';
import { useAuth } from './../../contexts/auth'; 

export default function Home() {
  const { user } = useAuth(); 

  return (
    <div class="homeBox">
      <div class="title">
        <h1><b>Witaj,</b> { user.firstName }</h1>
        <h2>Jesteś zalogowany jako <b>{ user.position }</b></h2>
      </div>
      <div class="image">
        <img src={require('../../images/hello.png')} alt=""/>
      </div>
    </div>
)}
