import { CreateLazyChunk } from './helpers/CreateLazyChunk';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import PublicRoute from './components/publicRoute/PublicRoute';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import { Header } from './components/header/Header';
// import { getIsFetchingCurrent } from './redux/authorization/auth-selectors';
// import authOperations from './redux/authorization/auth-operations';

const MainPage = CreateLazyChunk('MainPage');
const LoginPage = CreateLazyChunk('LoginPage');
const RegistrationPage = CreateLazyChunk('RegistrationPage');
const DiaryPage = CreateLazyChunk('DiaryPage');
const CalculatorPage = CreateLazyChunk('CalculatorPage');

function App() {
  // const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <PublicRoute restricted redirectTo="/diary">
                <MainPage />
              </PublicRoute>
            }
          />
          <Route
            path="registration"
            element={
              <PublicRoute restricted redirectTo="/diary">
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/diary">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="diary"
            element={
              <PrivateRoute redirectTo="/login">
                <DiaryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="calculator"
            element={
              <PrivateRoute redirectTo="/login">
                <CalculatorPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
