import React from 'react';
import {
  Button, Card, CardText, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const AuthorsCard = ({
  firstName,
  lastName,
  email,
  handleClick
}) => (
    <>
      <Card body>
          <CardTitle tag="h5">Author: {firstName} {lastName}</CardTitle>
          <CardText>Author&#39;s email: {email}</CardText>
          {handleClick ? <Button onClick={handleClick}>Print Student</Button> : ''}
      </Card>
    </>
);

AuthorsCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default AuthorsCard;
