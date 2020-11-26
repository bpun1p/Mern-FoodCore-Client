import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SocialSignUp from './SocialSignUp';
import AuthService from '../../service/AuthService';

function SignUpForm() {
  const [user, setUser] = useState({ username: '', password: '' });
  const [isMatch, setMatch] = useState(true);
  const [isEmpty, setEmpty] = useState(false);
  const [confirmInput, setConfirmInput] = useState({ usernameConfirm: '', passwordConfirm: '' });
  const [errMessage, setErrMessage] = useState('');

  const history = useHistory();

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onConfirmation = (event) => {
    setConfirmInput({ ...confirmInput, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setUser({ username: '', password: '' });
  };

  function refreshPage() {
    window.location.reload();
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (user.username !== ''
        && confirmInput.usernameConfirm !== ''
        && user.password !== ''
        && confirmInput.passwordConfirm !== '') {
      if (user.username !== confirmInput.usernameConfirm
        || user.password !== confirmInput.passwordConfirm) {
        setEmpty(false);
        setMatch(false);
      } else {
        AuthService.register(user)
          .then((data) => {
            const { message } = data;
            resetForm();
            if (!message.msgError) {
              history.push('/login');
            } else {
              setErrMessage(message.msgBody);
            }
          })
          .then(() => {
            if (window.location.pathname === '/login') refreshPage();
          });
      }
    } else {
      setEmpty(true);
    }
  };

  return (
    <div className="signup">
      <h1 className="entryheader__header" data-testid="signupTitle">Sign Up</h1>
      <form id="signup__form" onSubmit={onSubmit}>
        <div className="signup__inputs">
          <input
            placeholder="Username"
            type="text"
            id="username"
            name="username"
            className="signup__email"
            data-testid="Username"
            onChange={onChange}
          />
          <input
            placeholder="Re-enter Username"
            type="text"
            id="usernameConfirm"
            name="usernameConfirm"
            className="signup__e-confirm"
            data-testid="UsernameConfirm"
            onChange={onConfirmation}
          />
          <input
            placeholder="Choose a password"
            type="password"
            id="password"
            name="password"
            className="signup__password"
            onChange={onChange}
            data-testid="Password"
          />
          <input
            placeholder="Re-enter password"
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            className="signup__pass-confirm"
            data-testid="PasswordConfirm"
            onChange={onConfirmation}
          />
        </div>
        {isMatch !== true
          ? <h1>username or password do not match</h1>
          : null}
        {isEmpty !== false
          ? <h1>please fill in all feilds</h1>
          : null}
        {errMessage !== ''
          ? <h1>{errMessage}</h1>
          : null}
        <input type="submit" value="Sign Up" className="form__submit-btn" data-testid="SignupBtn" />
      </form>
      <div className="signup__submits">
        <p className="signup__alt-text">Or sign up with</p>
        <SocialSignUp />
      </div>
    </div>
  );
}

export default SignUpForm;
