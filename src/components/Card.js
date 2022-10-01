import styled from 'styled-components';

function Card({ props }) {
  return (
    <CardContainer>
      {console.log(props.name)}
      <img src={props.image} alt="" />
      <h2>{props.name}</h2>
      <ul>
        <li>Status: {props.status}</li>
        <li>Species: {props.species}</li>
        <li>Gender: {props.gender}</li>
        <li>Origin: {props.origin.name}</li>
        <li>Location: {props.location.name}</li>
      </ul>
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

  & ul {
    color: var(--secondary);
    text-align: left;
    font-family: var(--copy);
  }
`;

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
  margin: 3em auto;
  transition: 300ms ease-in-out;

  &:hover {
    background-color: var(--secondary);
  }
`;
