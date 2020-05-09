import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/13697898?s=460&u=2aedada2b840e9a047fbec5b49fc8e0d3e5f7236&v=4"
            alt="Natanael Sirqueira"
          />

          <div>
            <strong>natanaelsirqueira/BeTheHero</strong>
            <p>Projeto desenvolvido durante a Semana OmniStack 11.0</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/13697898?s=460&u=2aedada2b840e9a047fbec5b49fc8e0d3e5f7236&v=4"
            alt="Natanael Sirqueira"
          />

          <div>
            <strong>natanaelsirqueira/BeTheHero</strong>
            <p>Projeto desenvolvido durante a Semana OmniStack 11.0</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/13697898?s=460&u=2aedada2b840e9a047fbec5b49fc8e0d3e5f7236&v=4"
            alt="Natanael Sirqueira"
          />

          <div>
            <strong>natanaelsirqueira/BeTheHero</strong>
            <p>Projeto desenvolvido durante a Semana OmniStack 11.0</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
