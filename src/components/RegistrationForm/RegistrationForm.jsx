import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Section } from './RegistrationForm.Styled';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/authorization/auth-operations';

export const RegistrationForm = ({ onFormSubmit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLoginClick = () => {
    navigate('/signin');
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(254, 'Too long!')
      .required('This field is required!'),
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
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      // onFormSubmit(values);
      dispatch(authOperations.register({ values }));
    },
  });

  return (
    <Section>
      <h3 className="form-title">Register</h3>

      <form onSubmit={formik.handleSubmit} className="form">
        <input
          name="name"
          className="form-input"
          placeholder="Name *"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('name')}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <p className="form-input-error">{formik.errors.name}</p>
        ) : null}

        <input
          name="email"
          className="form-input"
          placeholder="Email *"
          type="email"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="form-input-error">{formik.errors.email}</p>
        ) : null}

        <input
          name="password"
          className="form-input"
          placeholder="Password *"
          type="password"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="form-input-error">{formik.errors.password}</p>
        ) : null}

        <div className="buttons">
          <button className="login-button" type="button" onClick={onLoginClick}>
            Login
          </button>
          <button className="register-button" type="submit">
            Register
          </button>
        </div>
      </form>
    </Section>
  );
};

RegistrationForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
