import PropTypes from 'prop-types';
import { useFormik } from 'formik';

export const RegistrationForm = ({ onFormSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    // validationSchema,
    onSubmit: values => {
      onFormSubmit(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
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
          type="text"
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
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="form-input-error">{formik.errors.password}</p>
        ) : null}

        <button type="submit">Register</button>
      </form>
    </>
  );
};

RegistrationForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
