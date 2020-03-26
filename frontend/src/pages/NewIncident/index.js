import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';
import colors from '../../styles/colors';
import logo from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <Container>
      <div className="content">
        <section>
          <img src={logo} alt="Be the Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color={colors.primary} />
            Voltar para home
          </Link>
        </section>
        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="whatsapp" />

          <input placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  );
}
