import React, { Fragment, useState, useEffect } from "react"

import UserLogin from './UserLogin';
import UserLogout from './UserLogout';

const Dashboard = ({ loggedInUserId }) => {
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    !currentUserId && setCurrentUserId(loggedInUserId);
  });

  return (
    (!currentUserId ?
      <UserLogin
        setCurrentUserId={setCurrentUserId}
      /> :
      <Fragment>
        Logged in user id: {currentUserId}
        <UserLogout
          setCurrentUserId={setCurrentUserId}
        />
      </Fragment>
    )
  )
}

export default Dashboard;
