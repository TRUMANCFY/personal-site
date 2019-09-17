import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/person.png`} alt="" />
      </Link>
      <header>
        <h2>Fengyu Cai</h2>
        <p><a href="mailto:caifengyutruman@gmail.com">caifengyutruman@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Fengyu.
            Currently, I am a computer science master student in <a href='https://epfl.ch'>EPFL</a>.
            In the summer 2018, I finished my undergraduate study in <a href='https://ust.hk'>Hong Kong University of Science and Technology</a>,
            double majoring in Electronic Engineering and Computer Science.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Michael D&apos;Angelo <a href="https://mldangelo.com">mldangelo.com</a>.</p>
    </section>
  </section>
);

export default Nav;
