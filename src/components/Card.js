import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useDetailsStatus from '../hooks';

function Card({ props, detailsState }) {
  const [details, { toggleDetailsStatus }] = useDetailsStatus(detailsState);

  return (
    <CardContainer>
      <img src={props.image} alt="" />
      <h2>{props.name}</h2>
      {details && (
        <DetailsList>
          <tbody>
            <tr>
              <th>Status:</th>
              <td>{props.status}</td>
            </tr>
            <tr>
              <th>Species:</th>
              <td>{props.species}</td>
            </tr>
            <tr>
              <th>Gender:</th>
              <td>{props.gender}</td>
            </tr>
            <tr>
              <th>Origin:</th>
              <td>{props.origin.name}</td>
            </tr>
            <tr>
              <th>Location:</th>
              <td>{props.location.name}</td>
            </tr>
          </tbody>
        </DetailsList>
      )}
      <Link onClick={toggleDetailsStatus} to={`/character/${props.id}`}>
        <Button>{!details ? 'show more' : 'hide details'}</Button>
      </Link>
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
    padding: 0.5em 1em;
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
  margin-bottom: 3em;
  margin-top: 1em;
  transition: 300ms ease-in-out;

  &:hover {
    background-color: var(--secondary);
  }
`;

const DetailsList = styled.table`
  margin: 0 2em 1em 2em;
  color: var(--secondary);
  font-family: var(--copy);
  text-align: left;
  border-collapse: collapse;
  font-size: 0.95em;

  & tr {
    background-color: #1f244a;
  }
  & tr:nth-child(even) {
    background-color: #232854;
  }

  & th {
    color: var(--primary);
    text-align: right;
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  & th,
  td {
    padding: 10px;
  }
`;
