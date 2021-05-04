import React, { useEffect, useState } from 'react';
import AuthorForm from '../AuthorForm';
import './App.scss';
import { getAuthors } from '../helpers/data/authorsData';
import AuthorsCard from '../components/authorsCard';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    console.warn('Authors', authors);
    getAuthors().then((resp) => setAuthors(resp));
  }, []);

  return (
    <div className='App'>
     <AuthorForm formTitle='Add Author'/>
    <hr/>
    {authors.map((authorInformation) => (
      <AuthorsCard key={authorInformation.firebaseKey}
          firstName={authorInformation.first_name}
          lastName={authorInformation.last_name}
          email={authorInformation.email}
          handleClick={() => console.warn(`${authorInformation.first_name}`)}
      />
    ))}
    </div>
  );
}

export default App;
