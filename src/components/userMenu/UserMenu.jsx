import { useDispatch } from 'react-redux';
// import { getUserName } from '../../redux/authorization/auth-selectors';
import authOperations from '../../redux/authorization/auth-operations';
import {
  ContainerUserMenuStyled,
  ContainerTextStyled,
} from './UserMenu.styled';
// import { TbArrowBack } from 'react-icons/tb';

export function UserMenu() {
  const dispatch = useDispatch();
  //   const userName = useSelector(getUserName);

  return (
    <ContainerUserMenuStyled>
      {/* {isOpenModal && (
        <ContainerArrowStyled>
          <TbArrowBack />
        </ContainerArrowStyled>
      )} */}
      <ContainerTextStyled>
        {/* <p>{ userName }</p> */}
        <p>Roman</p>
        <button onClick={() => dispatch(authOperations.logOut())}>Exit</button>
      </ContainerTextStyled>
    </ContainerUserMenuStyled>
  );
}
