// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import authOperations from '../../redux/auth/auth-operations';
import React from 'react';
import { useFormik } from 'formik';
import { LoginBtn,RegisterBtn } from "./LoginForm.styled";

export const LoginForm = ({onLoginFormSubmit}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // validationSchema,
    onSubmit: values => {
      onLoginFormSubmit(values);
    },
  });
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
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          required />
        <input
          type="password"
          name="password"
           minlength="3" 
          placeholder="Password *"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
          required
        />
        <div>
          <LoginBtn type="submit">Login</LoginBtn>
          <RegisterBtn type="button">Register</RegisterBtn>
        </div>
      </form>
    </>
  );
};
