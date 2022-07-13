import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/authorization';
import { useNavigate } from 'react-router';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Section, H2, Input, InputError, BoxButtons, LoginBtn, RegisterBtn } from './LoginForm.styled';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegisterClick = () => {
    navigate('/registration');
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
      dispatch(authOperations.logIn(values));
      console.log('Form', values);
      formik.resetForm({ name: '', email: '' });
    },
  });

  return (
    <Section>
      <H2>SING IN</H2>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email *"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <InputError>{formik.errors.email}</InputError>
        )}
        <Input
          type="password"
          name="password"
          placeholder="Password *"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <InputError>{formik.errors.password}</InputError>
        )}
        <BoxButtons>
          <LoginBtn type="submit">Login</LoginBtn>
          <RegisterBtn type="button" onClick={onRegisterClick}>
            Register
          </RegisterBtn>
        </BoxButtons>
      </form>
    </Section>
  );
};
