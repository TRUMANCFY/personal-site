import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => {
    <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <img src={url.resolve(BASE_PATH, data.image)} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
}

Publication.propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      conference: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }).isRequired,
};

export default Publication;