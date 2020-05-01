import React, { useState } from "react"
import PropTypes from "prop-types"
import UserLoginForm from './components/UserLoginForm';
import axios from 'axios';

const UserLogin = ({ setCurrentUserId }) => {
  const [userName, setUserName] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const params = { username: userName, password: userPassword, commit: "Log in" };

  const authenticateUser = () => {
    axios({
      method: 'post',
      url: '/login',
      responseType: 'json',
      headers: {
        Accept: 'text/javascript',
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.head.querySelector('[name=csrf-token]').content,
        'X-Requested-With': 'XMLHttpRequest',
      },
      data: params,
    }).then(response => setCurrentUserId(response.data.id))
      .catch(error => console.log(error))
  }

  return (
    <UserLoginForm
      setUserName={setUserName}
      setUserPassword={setUserPassword}
      authenticateUser={authenticateUser}
    />
  );
}

UserLogin.propTypes = {
  setCurrentUserId: PropTypes.func.isRequired,
};

export default UserLogin;
