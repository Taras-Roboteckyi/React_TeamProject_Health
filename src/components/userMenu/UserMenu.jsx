import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/authorization/auth-selectors';
import authOperations from '../../redux/authorization/auth-operations';
import { ContainerTextStyled } from './UserMenu.styled';

/* import BurgerIcon from '../../images/BurgerIcon.svg'; */
import { useWindowWidth } from '@react-hook/window-size';

// import { TbArrowBack } from 'react-icons/tb';

export default function UserMenu() {
  const windowWidth = useWindowWidth();

  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <>
      {/* {windowWidth <= 767 && <img src={BurgerIcon} alt="Меню" width={18} />} */}
      <ContainerTextStyled>
        <p>{userName}</p>
        <button onClick={() => dispatch(authOperations.logOut())}>Вихід</button>
        {windowWidth >= 768 && (
          <button onClick={() => dispatch()}>
            {/* {windowWidth <= 1279 && <img src={BurgerIcon} alt="Меню" />} */}
          </button>
        )}
      </ContainerTextStyled>
    </>
  );
}
