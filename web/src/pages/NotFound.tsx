import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

import LogoImg from '../images/logo-marca-blue.svg';
import '../styles/pages/notFound.css';

const NotFound = () => {
  return(
    <div id="page-notFound">
      <main>
        <img src={LogoImg} alt=""/>
        <h1>404... Ooops! Essa página não foi encontrada, retorne para a Home.</h1>
        <Link to="/" className="enter-home">
          <FiHome size={35} color="#FFF" />
        </Link>
      </main>
    </div>
  );
}

export default NotFound;