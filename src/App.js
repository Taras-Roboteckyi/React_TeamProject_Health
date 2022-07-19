import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import PublicRoute from './components/publicRoute/PublicRoute';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import { Layout } from './components/Layout/Layout';
import { lightTheme, darkTheme } from './constans/Constants';
import { GlobalStyle } from './GlobalStyle.styled';

import { authOperations, authSelectors } from './redux/authorization';
import AppLoader from './components/Loader/Loader';
import { CreateLazyChunk } from './helpers/CreateLazyChunk';

const MainPage = CreateLazyChunk('MainPage', 'MainPage/MainPage');
const RegistrationPage = CreateLazyChunk(
  'RegistrationPage',
  'RegistrationPage/RegistrationPage',
);
const LoginPage = CreateLazyChunk('LoginPage', 'LoginPage/LoginPage');

const DiaryPage = CreateLazyChunk('DiaryPage', 'DiaryPage/DiaryPage');
const CalculatorPage = CreateLazyChunk(
  'CalculatorPage',
  'CalculatorPage/CalculatorPage',
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <>
        <button onClick={toggleTheme}>
          {isDarkTheme ?
            <span aria-label="Light mode" role="img">🌞</span> :
            <span aria-label="Dark mode" role="img">🌜</span>}
        </button>
        {!isFetchingCurrentUser && ( //Щоб не моргав інтерфейс при переході на перезагрузку
          <Suspense fallback={<AppLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    <PublicRoute restricted redirectTo="/diary">
                      <MainPage />
                    </PublicRoute>
                  }
                  /* element={<MainPage />} */
                />
                <Route
                  path="registration"
                  element={
                    <PublicRoute restricted redirectTo="/calculator">
                      <RegistrationPage />
                    </PublicRoute>
                  }
                  /* element={<RegistrationPage />} */
                />
                <Route
                  path="signin"
                  element={
                    <PublicRoute restricted redirectTo="/diary">
                      <LoginPage />
                    </PublicRoute>
                  }
                  /*  element={<LoginPage />} */
                />
                <Route
                  path="diary"
                  element={
                    <PrivateRoute redirectTo="/signin">
                      <DiaryPage />
                    </PrivateRoute>
                  }
                  /* element={<DiaryPage />} */
                />
                <Route
                  path="calculator"
                  element={
                    <PrivateRoute redirectTo="/signin">
                      <CalculatorPage />
                    </PrivateRoute>
                  }
                  /* element={<CalculatorPage />} */
                />
              </Route>

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        )}

        <Toaster toastOptions={{ duration: 3000 }} />
      </>
    </ThemeProvider>
  );
}

export default App;
