import React from 'react';
import {
  Button, Card, CardText, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../helpers/data/authorsData';

const AuthorsCard = ({
  firebaseKey,
  firstName,
  lastName,
  email,
  setAuthors
}) => {
  const handleClick = () => {
    deleteAuthor(firebaseKey).then((authorArray) => setAuthors(authorArray));
    // console.warn(firebaseKey);
    console.warn(setAuthors);
  };

  return (
    <Card body>
      <CardTitle tag="h5">Author: {firstName} {lastName}</CardTitle>
      <CardText>Author&#39;s email: {email}</CardText>
      <Button color="danger" onClick={handleClick}>Delete Author</Button>
    </Card>
  );
};

AuthorsCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setAuthors: PropTypes.func
};

export default AuthorsCard;
