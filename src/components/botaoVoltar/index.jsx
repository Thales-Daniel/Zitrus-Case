import { Link } from 'react-router-dom';
import React from 'react';
import './style.css';

function BotaoVoltar() {
  return (
    <Link className="botaoVoltar" to="/customer">
      Voltar
    </Link>
  );
}

export default BotaoVoltar;
