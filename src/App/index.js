import React, { useEffect, useState } from 'react';
import AuthorForm from '../AuthorForm';
import { getAuthors } from '../helpers/data/authorsData';
import AuthorsCard from '../components/authorsCard';
import './App.scss';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    console.warn('Authors', authors);
    getAuthors().then((resp) => setAuthors(resp));
  }, []);

  return (
    <>
     <AuthorForm
       formTitle='Add Author'
       setAuthors={setAuthors}
     />
    <hr/>
    <div className="card-container">
    {authors.map((authorInformation) => (
      <AuthorsCard
          key={authorInformation.firebaseKey}
          firebaseKey={authorInformation.firebaseKey}
          firstName={authorInformation.first_name}
          lastName={authorInformation.last_name}
          email={authorInformation.email}
          setAuthors={setAuthors}
      />
    ))}
    </div>
    </>
  );
}

export default App;
