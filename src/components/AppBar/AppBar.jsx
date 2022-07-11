import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNavLogined';
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
