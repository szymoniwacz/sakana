import React from "react"
import PropTypes from "prop-types"

const UserLoginForm = ({
  setUserName,
  setUserPassword,
  authenticateUser,
}) => {

  const setName = (e) => {
    setUserName(e.target.value);
  };

  const setPassword = (e) => {
    setUserPassword(e.target.value);
  };

  return (
    <div className="col-sm-12">
      <h2>Login Form</h2>

      <div className="field">
        <input
          type="text"
          onChange={setName}
        />
      </div>

      <div className="field">
        <input
          type="password"
          onChange={setPassword}
          defaultValue=""
        />
      </div>

      <div className="actions">
        <input type="submit" onClick={authenticateUser} />
      </div>
    </div>
  );
}

UserLoginForm.propTypes = {
  authenticityToken: PropTypes.string
};
export default UserLoginForm
