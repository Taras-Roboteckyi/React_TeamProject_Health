import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Section } from './DailyCalorieIntake.Styled';
import { DailyButton } from '../DailyCaloriesForm/DailyButton.Styled';

import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/authorization';
import { getIsLoggedIn } from '../../redux/authorization/auth-selectors';

export const DailyCalorieIntake = ({ data, onClose }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('Start losing weight clicked');
    onClose();
  };

  return (
    <Section>
      <h3 className="daily-calorie-title">
        Your recommended daily calorie intake is
      </h3>

      <div className="daily-calorie-box">
        <p>
          {data.calories}
          <span>kcal</span>
        </p>
      </div>

      <p className="daily-calorie-text">Foods you should not eat</p>

      <ul className="daily-calorie-list">
        {data.products.map((product, index) => {
          return (
            <li key={product}>
              <span>{index + 1}.</span>
              <span>{product}</span>
            </li>
          );
        })}
      </ul>

      <div className="daily-calorie-button">
        <DailyButton onClick={onClick}>Start losing weight</DailyButton>
      </div>
    </Section>
  );
};

DailyCalorieIntake.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
};
