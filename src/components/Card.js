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
  background-color: var(--background);
  margin: 2em 0;
  text-align: center;
  position: relative;
  width: 300px;
  border-radius: 10px;

  & img {
    border-radius: 10px 10px 0 0;
  }

  & h2 {
    color: var(--dark);
  }
`;

const Button = styled.button`
  background: var(--primary);
  color: var(--dark);
  border: none;
  font-size: 1em;
  padding: 1em;
`;
