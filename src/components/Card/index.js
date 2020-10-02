import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardDiv = styled.div`
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0 4px #556877;
  img {
    margin: 0 auto;
    display: block;
  }
`;

const CardContent = styled.div`
  h3 {
    font-size: 2.3rem;
  }
`;

const Card = props => {
  const { poster, title, releaseDate, rating, overview } = props;
  return (
    <CardDiv>
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster}`}
        alt={`${title} poster`}
      />
      <CardContent>
        <h3>{title}</h3>
        <p>
          <small>
            <b>Release Date:</b> {releaseDate}
          </small>
        </p>
        <p>
          <small>
            <b>Rating:</b> {rating}
          </small>
        </p>
        <p>{overview}</p>
      </CardContent>
    </CardDiv>
  );
};

Card.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  rating: PropTypes.number,
  overview: PropTypes.string,
};

export default Card;
