import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 1rem;
  margin-top: 4rem;
`;

const CardList = props => {
  const { movies } = props;
  return (
    <CardGrid>
      {movies
        .filter(movie => movie.poster_path)
        .map(movie => (
          <Card
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
            overview={movie.overview}
          />
        ))}
    </CardGrid>
  );
};

CardList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default CardList;
