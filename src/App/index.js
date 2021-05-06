import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
// import ReactDom from 'react-dom';
import firebase from 'firebase/app';
import firebaseConfig from '../helpers/apiKeys';
import AuthorForm from '../AuthorForm';
import { getAuthors } from '../helpers/data/authorsData';
import AuthorsCard from '../components/authorsCard';
import './App.scss';
// import repostWebVitals from '../reportWebVitals';
import '../styles/index.scss';

firebase.initializeApp(firebaseConfig);

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
          favorite={authorInformation.favorite}
          setAuthors={setAuthors}
      />
    ))}
    </div>
    </>
  );
}

export default App;
