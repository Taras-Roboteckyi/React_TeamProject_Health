import { useDispatch } from 'react-redux';
// import { getUserName } from '../../redux/authorization/auth-selectors';
import authOperations from '../../redux/authorization/auth-operations';
import {
  ContainerUserMenuStyled,
  ContainerTextStyled,
} from './UserMenu.styled';

import AuthNavLogined from '../AuthNav/AuthNavLogined';
/* import BurgerIcon from '../../images/BurgerIcon.svg'; */
import { useWindowWidth } from '@react-hook/window-size';

// import { TbArrowBack } from 'react-icons/tb';

export default function UserMenu() {
  const windowWidth = useWindowWidth();

  const dispatch = useDispatch();
  //   const userName = useSelector(getUserName);

  return (
    <ContainerUserMenuStyled>
      <AuthNavLogined />
      {/* {isOpenModal && (
        <ContainerArrowStyled>
          <TbArrowBack />
        </ContainerArrowStyled>
      )} */}

      {/* {windowWidth <= 767 && <img src={BurgerIcon} alt="Меню" width={18} />} */}
      <ContainerTextStyled>
        {/* <p>{ userName }</p> */}
        <p>Роман</p>
        <button onClick={() => dispatch(authOperations.logOut())}>Вихід</button>
        {windowWidth >= 768 && (
          <button onClick={() => dispatch()}>
            {/* {windowWidth <= 1279 && <img src={BurgerIcon} alt="Меню" />} */}
          </button>
        )}
      </ContainerTextStyled>
    </ContainerUserMenuStyled>
  );
}
