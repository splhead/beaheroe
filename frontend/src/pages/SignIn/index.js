import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import colors from '../../styles/colors';

export default function SignIn() {
  return (
    <Container>
      <section className="form">
        <img src={logo} alt="BeaHero" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color={colors.primary} />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
