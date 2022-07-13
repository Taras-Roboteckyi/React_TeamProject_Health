/* import { CreateLazyChunk } from './helpers/CreateLazyChunk'; */
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import PublicRoute from './components/publicRoute/PublicRoute';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { DiaryPage } from './pages/DiaryPage/DiaryPage';
import { CalculatorPage } from './pages/CalculatorPage/CalculatorPage';
/* import { getIsFetchingCurrent } from './redux/authorization/auth-selectors'; */
import { authOperations, authSelectors } from './redux/authorization';

/* const MainPage = CreateLazyChunk('MainPage');
const LoginPage = CreateLazyChunk('LoginPage');
const RegistrationPage = CreateLazyChunk('RegistrationPage');
const DiaryPage = CreateLazyChunk('DiaryPage');
const CalculatorPage = CreateLazyChunk('CalculatorPage'); */

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      {!isFetchingCurrentUser && ( //Щоб не моргав інтерфейс при переході на перезагрузку
        <Suspense fallback={<p>Download...</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute restricted redirectTo="diary">
                    <MainPage />
                  </PublicRoute>
                }
                /* element={<MainPage />} */
              />
              <Route
                path="registration"
                element={
                  <PublicRoute restricted redirectTo="diary">
                    <RegistrationPage />
                  </PublicRoute>
                }
                /* element={<RegistrationPage />} */
              />
              <Route
                path="signin"
                element={
                  <PublicRoute restricted redirectTo="diary">
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
    </>
  );
}

export default App;
