import { useDispatch } from 'react-redux';
// import { getUserName } from '../../redux/authorization/auth-selectors';
import authOperations from '../../redux/authorization/auth-operations';
import {
  ContainerUserMenuStyled,
  ContainerTextStyled,
} from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  //   const userName = useSelector(getUserName);

  return (
    <ContainerUserMenuStyled>
      <ContainerTextStyled>
        {/* <p>{ userName }</p> */}
        <p>Roman</p>
        <button onClick={() => dispatch(authOperations.logOut())}>Exit</button>
      </ContainerTextStyled>
    </ContainerUserMenuStyled>
  );
}
