import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/authorization/auth-selectors';
import authOperations from '../../redux/authorization/auth-operations';
import { ContainerTextStyled } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <>
      <ContainerTextStyled>
        <p>{userName}</p>
        <button onClick={() => dispatch(authOperations.logOut())}>Вихід</button>
      </ContainerTextStyled>
    </>
  );
}
