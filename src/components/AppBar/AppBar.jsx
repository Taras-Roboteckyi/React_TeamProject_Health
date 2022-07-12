import { useSelector } from 'react-redux';
/* import { Link } from 'react-router-dom'; */
import Navigation from '../Navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/authorization';

import { Header, Wrapper } from './AppBar.styled';
import { Container } from '../container';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Header>
      <Container>
        <Wrapper>
          <Navigation />
          {isLoggedIn /* true */ ? <UserMenu /> : <AuthNav />}
        </Wrapper>
      </Container>
    </Header>
  );
}
