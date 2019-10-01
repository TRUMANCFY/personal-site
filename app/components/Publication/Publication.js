import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => (
  <article className="paper-container">
    <h4>{data.title}</h4>
    <p className="conference">{data.authors}, {data.conference} ({data.short_conf}) [<a href={data.paper_url}>paper</a>] [<a href={data.video_url}>video</a>]</p>
  </article>
)

Publication.propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.string.isRequired,
      conference: PropTypes.string.isRequired
    }).isRequired,
};

export default Publication;