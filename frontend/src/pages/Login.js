import React  from 'react';
import './Login.css';
import logo from "../assets/logo.svg";
export default function Login(){

    return(
        <div className="login-container">
            <form>
            <img src={logo} alt="tindev"/>
            <input placeholder= "Digite seu usuario no github"/>
            <button type= "submit">Enviar</button>
            </form>
        </div>
    );
}