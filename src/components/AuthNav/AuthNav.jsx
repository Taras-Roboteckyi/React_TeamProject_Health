import React from 'react';

import { Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <Link to="registration">Registration</Link>
      <Link to="signin">Sign In </Link>
      <Link to="diary">DiaryPage</Link>
      <Link to="calculator">CalculatorPage</Link>
    </div>
  );
}
