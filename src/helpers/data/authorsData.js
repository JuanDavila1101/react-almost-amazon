import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// add AUTHOR
const addAuthor = (authorObject) => new Promise((resolve, reject) => {
  console.warn(`${dbUrl}/authors.json`);
  debugger;
  axios.post(`${dbUrl}/authors.json`, authorObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          // getAuthors(uid).then((authorsArray) => resolve(authorsArray));
        });
    }).catch((error) => reject(error));
});

export default addAuthor;
