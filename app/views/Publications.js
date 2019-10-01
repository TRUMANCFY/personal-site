import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Publication from '../components/Publication/Publication'
import data from '../data/publications'

const Publications = () => (
  <Main>
    <Helmet title="Publications" />
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2><Link to="/publication">Publications</Link></h2>
        </div>
      </header>
      {data.map((paper) => (
        <Publication
          data={paper}
        />
      ))}
  </article>
  </Main>
);

export default Publications;
