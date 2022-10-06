import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useToggle } from '../hooks';

function Card({ props, detailsState, toggleFavorite, favorites }) {
  const [details, toggleDetails] = useToggle(detailsState);
  const [bookmark, toggleBookmark] = useToggle(favorites.includes(props.id));

  return (
    <CardContainer>
      <img src={props.image} alt={props.name} />
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
      <Link to={`/character/${props.id}`}>
        <Button onClick={toggleDetails}>{!details ? 'show more' : 'hide details'}</Button>
      </Link>
      <BookmarkButton
        onClick={() => {
          toggleBookmark();
          toggleFavorite();
        }}
        bookmarked={bookmark}
      >
        {!bookmark ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -3 24 24" width="20">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -3 24 24" width="20">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        )}
      </BookmarkButton>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.article`
  z-index: 10;
  background-color: var(--background);
  margin: 2em 1em;
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
  margin: 0 auto 1em auto;
  color: var(--secondary);
  font-family: var(--copy);
  text-align: left;
  border-collapse: collapse;
  font-size: 0.95em;
  width: 80%;

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

const BookmarkButton = styled.div`
  width: 2em;
  height: 2em;
  background-color: ${({ bookmarked }) => (bookmarked ? 'var(--secondary)' : 'var(--primary-with-alpha)')};
  border: ${({ bookmarked }) => (bookmarked ? '2px solid var(--secondary)' : '2px dotted var(--primary)')};
  border-radius: 50%;
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  transition: 300ms ease-in-out;

  & svg {
    fill: ${({ bookmarked }) => (bookmarked ? 'var(--primary-light)' : 'var(--primary)')};
  }
`;
