import {
  /* Routes, Route, Navigate,  */
  Outlet /* NavLink  */,
} from 'react-router-dom';
import { Nav, Container, Link, Logo, Sign } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Nav>
        <Logo to="/">
          <img src="../../imges/logo.png" alt="Logo" />
        </Logo>
        <Sign to="signin">Sign In </Sign>
        <Link to="registration">Registration </Link>
        {/* <Link to="diary">DiaryPage</Link>
        <Link to="calculator">CalculatorPage</Link> */}
      </Nav>
      <Outlet />
    </Container>
  );
};
