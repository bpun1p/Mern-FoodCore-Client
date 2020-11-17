import React, { useContext, useState } from 'react';
import Media from 'react-media';
import { useHistory } from 'react-router-dom';
import SocialSignUp from './SocialSignUp';
import { AuthContext } from '../../Context/AuthContext';
import AuthService from '../../service/AuthService';

function LoginForm() {
  const [username, setUsername] = useState({ username: '' });
  const [isValidEntry, setValidEntry] = useState(true);

  const authContext = useContext(AuthContext);

  const history = useHistory();

  const onChange = (event) => {
    setUsername({ ...username, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    AuthService.login(username)
      .then((data) => {
        const { isAuthenticated, user } = data;
        if (isAuthenticated) {
          authContext.setUser(user);
          authContext.setIsAuthenticated(isAuthenticated);
          history.push('/profile/global');
        } else setValidEntry(false);
      });
  };

  return (
    <div className="login">
      <Media query="(min-width: 1080px)">
        <h1 className="entryheader__header">Login</h1>
      </Media>
      <form className="login__form" onSubmit={onSubmit}>
        <div className="login__inputs">
          <input
            placeholder="Username"
            type="text"
            id="username"
            name="username"
            className="login__email"
            onChange={onChange}
          />
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            className="login__password"
            onChange={onChange}
          />
        </div>
        {isValidEntry === false
          ? <h1 className="invalid__input">Invalid username or password</h1>
          : null}
        <button type="submit" value="Login" className="form__submit-btn">Login</button>
      </form>
      <div className="login__alt">
        <p className="login__alt-text">Or log in with</p>
        <SocialSignUp />
      </div>
    </div>
  );
}

export default LoginForm;
