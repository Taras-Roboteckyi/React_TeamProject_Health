import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/authorization/auth-selectors';
import authOperations from '../../redux/authorization/auth-operations';
import { ContainerTextStyled } from './UserMenu.styled';

// import { TbArrowBack } from 'react-icons/tb';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <ContainerUserMenuStyled>
      {/* {isOpenModal && (
        <ContainerArrowStyled>
          <TbArrowBack />
        </ContainerArrowStyled>
      )} */}
    <>
      <ContainerTextStyled>
        <p>{userName}</p>
        <button onClick={() => dispatch(authOperations.logOut())}>Вихід</button>
      </ContainerTextStyled>
    </>
  );
}
