import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import colors from '../../styles/colors';

import api from '../../services/api';

export default function SignIn() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <Container>
      <section className="form">
        <img src={logo} alt="BeaHero" />
        <form onSubmit={handleSignIn}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
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
