import { useSelector } from 'react-redux';
/* import { Link } from 'react-router-dom'; */
import Navigation from '../Navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/authorization';

import { Header, Wrapper } from './AppBar.styled';
import { Container } from '../container';
import { useWindowWidth } from '@react-hook/window-size';
import { useDispatch } from 'react-redux';
import AuthNavLogined from '../AuthNav/AuthNavLogined';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const windowWidth = useWindowWidth();
  const dispatch = useDispatch();

  return (
    <Header>
      <Container>
        <Wrapper>
          <Navigation />
          {isLoggedIn && <AuthNavLogined />}
          {isLoggedIn /* true */ ? <UserMenu /> : <AuthNav />}
          {windowWidth < 1280 && <button onClick={() => dispatch()}></button>}
        </Wrapper>
      </Container>
    </Header>
  );
}
