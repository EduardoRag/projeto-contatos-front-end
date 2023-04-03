import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import MainPage from './pages/main/MainPage';
import { FormContextProvider } from './contexts/FormContext';
import { getItem } from './functions/token';

const MainRoutes = () => {

    const ProtectedRoute = ({ redirectPath = '/', children }) => {
        const token = getItem('token');
        if (!token) {
            return <Navigate to={redirectPath} replace />
        }

        return children ? children : <Outlet />;
    }

    return (
        <Routes>
            <Route element={
                <FormContextProvider>
                    <LoginPage />
                </FormContextProvider>
            }
                path='/'
            />
            <Route element={
                <FormContextProvider>
                    <RegisterPage />
                </FormContextProvider>
            }
                path='/register'
            />
            <Route element={<ProtectedRoute />}>
                <Route path='/main' element={<MainPage />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;