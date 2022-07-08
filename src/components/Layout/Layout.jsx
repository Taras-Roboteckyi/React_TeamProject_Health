import {
  /* Routes, Route, Navigate,  */ Link,
  Outlet /* NavLink  */,
} from 'react-router-dom';
import { Nav } from './Layout.styled';
export const Layout = () => {
  return (
    <>
      <Nav>
        <Link to="/">MainPage</Link>
        <Link to="registration">RegistrationPage</Link>
        <Link to="login">LoginPage</Link>
        <Link to="diary">DiaryPage</Link>
        <Link to="calculator">CalculatorPage</Link>
      </Nav>
      <Outlet />
    </>
  );
};
