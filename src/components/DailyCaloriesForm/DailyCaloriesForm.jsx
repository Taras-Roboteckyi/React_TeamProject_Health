import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { Section } from './DailyCaloriesForm.Styled';
import { DailyButton } from './DailyButton.Styled';
import { useState } from 'react';
import * as Yup from 'yup';

export const DailyCaloriesForm = ({ onFormSubmit, onOpen }) => {
  const [isLabelCheked, setIsLabelCheked] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
  });

  const onRadioClick = button => {
    setIsLabelCheked({
      one: false,
      two: false,
      three: false,
      four: false,
    });
    setIsLabelCheked(prevState => {
      return {
        ...prevState,
        [button]: true,
      };
    });
  };

  const validationSchema = Yup.object({
    height: Yup.number()
      .typeError('Must be a number')
      .min(100, 'Too low!')
      .max(250, 'Too high!')
      .required('This field is required!'),
    age: Yup.number()
      .typeError('Must be a number')
      .min(18, 'Too young!')
      .max(100, 'Too old!')
      .required('This field is required!'),
    currentWeight: Yup.number()
      .typeError('Must be a number')
      .min(20, 'Too light!')
      .max(500, 'Too heavy!')
      .required('This field is required!'),
    desiredWeight: Yup.number()
      .typeError('Must be a number')
      .min(20, 'Too light!')
      .max(500, 'Too heavy!')
      .required('This field is required!')
      .when('currentWeight', (currentWeight, validationSchema) => {
        return validationSchema.test({
          test: desiredWeight => currentWeight && desiredWeight < currentWeight,
          message: 'The expected weight must be less than the current weight',
        });
      }),
    bloodType: Yup.number()
      .typeError('Must be a number')
      .oneOf([1, 2, 3, 4])
      .required('This field is required!'),
  });

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '1',
    },
    validationSchema,
    onSubmit: values => {
      onFormSubmit(values);
      onOpen();
    },
  });

  return (
    <Section>
      <h3 className="form-label">
        Calculate your daily calorie intake right now
      </h3>

      <form onSubmit={formik.handleSubmit}>
        <div className="form">
          <div className="form-part">
            <input
              name="height"
              className="form-input"
              placeholder="height *"
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('height')}
              value={formik.values.height}
            />
            {formik.touched.height && formik.errors.height ? (
              <p className="form-input-error">{formik.errors.height}</p>
            ) : null}

            <input
              name="age"
              className="form-input"
              placeholder="age *"
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('age')}
              value={formik.values.age}
            />
            {formik.touched.age && formik.errors.age ? (
              <p className="form-input-error">{formik.errors.age}</p>
            ) : null}

            <input
              name="currentWeight"
              className="form-input"
              placeholder="Current weight *"
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('currentWeight')}
              value={formik.values.currentWeight}
            />
            {formik.touched.currentWeight && formik.errors.currentWeight ? (
              <p className="form-input-error">{formik.errors.currentWeight}</p>
            ) : null}
          </div>

          <div>
            <input
              name="desiredWeight"
              className="form-input"
              placeholder="Desired weight *"
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('desiredWeight')}
              value={formik.values.desiredWeight}
            />
            {formik.touched.desiredWeight && formik.errors.desiredWeight ? (
              <p className="form-input-error">{formik.errors.desiredWeight}</p>
            ) : null}

            <div>
              <p className="radio-buttons-title">Blood type *</p>
              <div className="radio-buttons">
                <label
                  className="radio-buttons-label"
                  style={{
                    color: `${isLabelCheked.one ? '#FC842D' : '#9B9FAA'}`,
                    fontWeight: `${isLabelCheked.one ? '700' : '400'}`,
                  }}
                  onClick={() => onRadioClick('one')}
                >
                  <input
                    type="radio"
                    name="bloodType"
                    className="radio-buttons-input"
                    value="1"
                    checked={formik.values.bloodType === '1'}
                    onChange={formik.handleChange}
                  />
                  1
                </label>
                <label
                  className="radio-buttons-label"
                  style={{
                    color: `${isLabelCheked.two ? '#FC842D' : '#9B9FAA'}`,
                    fontWeight: `${isLabelCheked.two ? '700' : '400'}`,
                  }}
                  onClick={() => onRadioClick('two')}
                >
                  <input
                    type="radio"
                    name="bloodType"
                    className="radio-buttons-input"
                    value="2"
                    checked={formik.values.bloodType === '2'}
                    onChange={formik.handleChange}
                  />
                  2
                </label>
                <label
                  className="radio-buttons-label"
                  style={{
                    color: `${isLabelCheked.three ? '#FC842D' : '#9B9FAA'}`,
                    fontWeight: `${isLabelCheked.three ? '700' : '400'}`,
                  }}
                  onClick={() => onRadioClick('three')}
                >
                  <input
                    type="radio"
                    name="bloodType"
                    className="radio-buttons-input"
                    value="3"
                    checked={formik.values.bloodType === '3'}
                    onChange={formik.handleChange}
                  />
                  3
                </label>
                <label
                  className="radio-buttons-label"
                  style={{
                    color: `${isLabelCheked.four ? '#FC842D' : '#9B9FAA'}`,
                    fontWeight: `${isLabelCheked.four ? '700' : '400'}`,
                  }}
                  onClick={() => onRadioClick('four')}
                >
                  <input
                    type="radio"
                    name="bloodType"
                    className="radio-buttons-input"
                    value="4"
                    checked={formik.values.bloodType === '4'}
                    onChange={formik.handleChange}
                  />
                  4
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="button">
          <DailyButton type="submit">Start losing weight</DailyButton>
        </div>
      </form>
    </Section>
  );
};

DailyCaloriesForm.propTypes = {
  onFormSubmit: PropTypes.func,
  onOpen: PropTypes.func,
};
