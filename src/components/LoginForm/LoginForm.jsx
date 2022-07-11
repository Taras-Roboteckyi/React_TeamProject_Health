// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import authOperations from '../../redux/auth/auth-operations';
import { LoginBtn,RegisterBtn } from "./LoginForm.styled";

export const LoginForm = () => {
  // const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //     return;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(authOperations.logIn({ email, password }));
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <>
      <form>
        <input type="email" name="email" placeholder="Email *" required />
        <input
          type="password"
          name="password"
          /* minlength="6" */ placeholder="Password *"
          required
        />
        <LoginBtn type="submit">Login</LoginBtn>
        <RegisterBtn type="submit">Register</RegisterBtn>
      </form>
    </>
  );
};
