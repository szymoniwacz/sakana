import React, { useState } from "react"
import axios from 'axios';

const UserLogout = ({ setCurrentUserId }) => {
  const logoutUser = () => {
    axios({
      method: 'delete',
      url: '/logout',
      responseType: 'json',
      headers: {
        Accept: 'text/javascript',
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.head.querySelector('[name=csrf-token]').content,
        'X-Requested-With': 'XMLHttpRequest',
      },
      data: {},
    }).then(response => setCurrentUserId(null))
      .catch(error => console.log(error))
  }

  return (
    <button type="button" onClick={logoutUser}>Log out</button>
  );
}

export default UserLogout;
