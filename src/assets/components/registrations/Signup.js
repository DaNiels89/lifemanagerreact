import React, { useState } from 'react';
import axios from 'axios';

export default function Signup(props) {
  const handleSubmit = event => {
    event.preventDefault();
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    };
    axios
      .post('http://localhost:3001/users', { user }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
          props.handleLogin(response.data);
          redirect();
        } else {
          setErrors(response.data.errors);
        }
      })
      .catch(error => console.log('api errors:', error));
  };

  const redirect = () => {
    props.history.push('/');
  };

  const handleErrors = () => {
    return (
      <div>
        <ul>
          {errors.map(error => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState('');

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={event => setPasswordConfirmation(event.target.value)}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>
      </form>
      <div>{errors ? handleErrors() : null}</div>
    </div>
  );
}
