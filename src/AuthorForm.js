import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import addAuthor from './helpers/data/authorsData';

const AuthorForm = ({
  // first_name,
  // last_name,
  // email,
  // favorite,
  firebaseKey
}) => {
  const [author, setAuthors] = useState({
    first_name: '',
    last_name: '',
    email: '',
    favorite: false,
    firebaseKey: firebaseKey || null
  });
  const history = useHistory();

  // This is to handle the user Changes in here
  const handleInputChange = (e) => {
    setAuthors((prevState) => ({
      ...prevState,
      [e.target.name]: (e.target.name !== 'favorite' ? e.target.value : e.target.checked),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      // updateAuthor(author).then(setAuthor);
      console.warn('Update Authors here');
    } else {
      addAuthor(author).then((response) => {
        setAuthors(response);
        history.push('/authors');
      });

      setAuthors({
        first_name: '',
        last_name: '',
        email: '',
        favorite: false,
        firebaseKey: null
      });
    }
  };

  return (
    <>
    <div className='author-form'>
      <form id='addStudentForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>New Author</h2>
          <label>Author&#39;s First Name:</label>
          <input
            name='first_name'
            id='first_name'
            type='text'
            placeholder='Enter a Author&#39;s First Name'
            value={author.name}
            onChange={handleInputChange}
          />
          <label>Author&#39;s Last Name:</label>
          <input
            name='last_name'
            id='last_name'
            type='text'
            placeholder='Enter a Author&#39;s First Name'
            value={author.name}
            onChange={handleInputChange}
          />
          <label>Email:</label>
          <input
            name='email'
            id='email'
            type='text'
            placeholder='Enter a email'
            value={author.name}
            onChange={handleInputChange}
          />
          <label>favorite:</label>
          <input
            name='favorite'
            id='favorite'
            type='checkbox'
            value={author.name}
            onChange={handleInputChange}
          />
        <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  );
};

AuthorForm.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  firebaseKey: PropTypes.string
};

export default AuthorForm;
