import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Publication from '../components/Publication/Publication'

const Publications = () => (
  <Main>
    <Helmet title="Publications" />
  </Main>
);

export default Publications;
