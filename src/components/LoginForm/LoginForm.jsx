import { useDispatch } from 'react-redux';
import authOperations from '../../redux/authorization/auth-operations';
import { useNavigate } from 'react-router';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginBtn,RegisterBtn } from "./LoginForm.styled";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegisterClick = () => {
    navigate('/registration')
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Not a proper email')
      .min(3, 'Too short!')
      .max(254, 'Too long!')
      .required('This field is required!'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?!.*[^a-zA-Z0-9])/,
        'Must contain at least one Latin letter and one number, without special case characters',
      )
      .min(8, 'Too short!')
      .max(100, 'Too long!')
      .required('This field is required!'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(authOperations.logIn({values}))
      console.log("Form", values)
      formik.resetForm({ name: '', email: '' });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} >
        <input
          type="email"
          name="email"
          placeholder="Email *"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
        <input
          type="password"
          name="password"
          placeholder="Password *"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}
        <div>
          <LoginBtn type="submit">Login</LoginBtn>
          <RegisterBtn type="button" onClick={onRegisterClick}>Register</RegisterBtn>
        </div>
      </form>
    </>
  );
};
