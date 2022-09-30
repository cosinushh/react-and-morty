import styled from 'styled-components';

function Card() {
  return (
    <CardContainer>
      <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
      <h2>Morty Smith</h2>
      <Button>Show more</Button>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.article`
  z-index: 10;
  background-color: var(--background);
  margin: 2em 0;
  text-align: center;
  position: relative;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);

  & img {
    border-radius: 10px 10px 0 0;
  }

  & h2 {
    font-family: var(--headline);
    text-transform: uppercase;
    font-size: 2em;
    padding: 1em;
    color: var(--secondary);
  }
`;

const Button = styled.button`
  font-family: var(--headline);
  text-transform: uppercase;
  background: var(--primary);
  color: var(--dark);
  border: none;
  font-size: 1.5em;
  border-radius: 5px;
  padding: 0.5em;
  margin-bottom: 2em;
  transition: 300ms ease-in-out;

  &:hover {
    background-color: var(--secondary);
  }
`;
