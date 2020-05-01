import React, { Fragment, useState, useEffect } from "react"

import UserLogin from './UserLogin';

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
      </Fragment>
    )
  )
}

export default Dashboard;
