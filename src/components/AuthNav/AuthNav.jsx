import React from 'react';

import { Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <Link to="registration">REGISTRATION</Link>
      <Link to="signin">SIGN IN </Link>
      <Link to="diary">DIARY</Link>
      <Link to="calculator">CALCULATOR</Link>
    </div>
  );
}
