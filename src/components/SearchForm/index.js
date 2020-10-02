import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import CardList from '../CardList';

const API_ENDPOINT =
  'https://api.themoviedb.org/3/search/movie?api_key=54b0124743468a043b1cdebdfacfed9f';

const Form = styled.form`
  display: grid;
  @media (min-width: 786px) {
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    justify-items: center;
  }
`;

const SearchForm = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = async event => {
    event.preventDefault();

    const url = `${API_ENDPOINT}&language=en-us&query=${movieTitle}`;

    try {
      const data = await (await fetch(url)).json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Movie Name"
          placeholder="Enter a movie title"
          onChange={e => setMovieTitle(e.target.value)}
        />
        <Button theme="primary" type="submit">
          Search
        </Button>
      </Form>
      <CardList movies={movies} />
    </>
  );
};

export default SearchForm;
