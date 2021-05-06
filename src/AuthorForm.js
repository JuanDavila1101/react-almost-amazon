import React, { useState } from 'react';
import {
  FormGroup, Form, Label, Input, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addAuthor, updateAuthor } from './helpers/data/authorsData';

const AuthorForm = ({
  formTitle,
  setAuthors,
  firebaseKey,
  firstName,
  lastName,
  email,
  favorite,
}) => {
  const [author, setAuthor] = useState({
    firebaseKey: firebaseKey || null,
    first_name: firstName || '',
    last_name: lastName || '',
    email: email || '',
    favorite: favorite || false,
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: (e.target.name !== 'favorite' ? e.target.value : e.target.checked),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      updateAuthor(author).then((response) => setAuthors(response));
    } else {
      addAuthor(author).then((response) => setAuthors(response));
    }
  };

  return (
    <>
    <div className='author-form'>
      <Form id='addAuthorForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label>Author&#39;s First Name:</Label>
          <Input
            name='first_name'
            id='first_name'
            type='text'
            placeholder='Enter a Author&#39;s First Name'
            value={author.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Author&#39;s Last Name:</Label>
          <Input
            name='last_name'
            id='last_name'
            type='text'
            placeholder='Enter a Author&#39;s First Name'
            value={author.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            name='email'
            id='email'
            type='text'
            placeholder='Enter a email'
            value={author.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>favorite:</Label>
          <Input
            name='favorite'
            id='favorite'
            type='checkbox'
            value={author.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
    </>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func,
  firebaseKey: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  favorite: PropTypes.bool
};

export default AuthorForm;
