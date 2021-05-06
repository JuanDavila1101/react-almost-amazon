import React, { useState } from 'react';
import {
  Button, Card, CardText, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../helpers/data/authorsData';
import AuthorForm from '../AuthorForm';

const AuthorsCard = ({
  firebaseKey,
  firstName,
  lastName,
  email,
  favorite,
  setAuthors
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        // debugger;
        deleteAuthor(firebaseKey).then((authorArray) => setAuthors(authorArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        console.warn('edit');
        break;
      default:
        console.warn('default');
    }
  };

  return (
    <Card body>
      <CardTitle tag="h5">Author: {firstName} {lastName}</CardTitle>
      <CardText>Author&#39;s email: {email}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Author</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
       {editing ? 'Close Form' : 'Edit Author'}
      </Button>
      {editing && <AuthorForm
         formTitle='Edit Author'
         setAuthors={setAuthors}
         firebaseKey={firebaseKey}
         firstName={firstName}
         lastName={lastName}
         email={email}
         favorite={favorite}
       />}
    </Card>
  );
};

AuthorsCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  setAuthors: PropTypes.func
};

export default AuthorsCard;
