import Card from '../components/Card';
import styled from 'styled-components';
import { useState } from 'react';
import { fetchSingleCharacter } from '../services';

export default function RandomPage({ favorites, toggleFavorite, charactersAmount }) {
  const [randomCharacter, setRandomCharacter] = useState([]);

  return (
    <>
      <Grid>
        {randomCharacter.length < 1 ? (
          <Svg xmlns="http://www.w3.org/2000/svg" height="250" viewBox="0 0 24 24" width="250">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
          </Svg>
        ) : (
          randomCharacter.map((character) => {
            return (
              <Card
                key={character.id}
                props={character}
                detailsState={false}
                toggleFavorite={() => toggleFavorite(character.id)}
                favorites={favorites}
              />
            );
          })
        )}

        <Button
          onClick={() => {
            const randomId = Math.floor(Math.random() * (charactersAmount + 1));
            fetchSingleCharacter(randomId, setRandomCharacter);
          }}
        >
          Get random character
        </Button>
      </Grid>
    </>
  );
}

const Button = styled.button`
  font-family: var(--copy);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: var(--primary);
  color: var(--dark);
  border: none;
  font-size: 0.8em;
  border-radius: 5px;
  padding: 0.8em;
  transition: 300ms ease-in-out;
  margin-bottom: 2rem;

  &:hover {
    background-color: var(--secondary);
  }
`;

const Svg = styled.svg`
  margin: 2rem auto;
  display: block;
  fill: var(--secondary);
`;

const Grid = styled.div`
  flex: grid;
`;
