import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import MainPage from './pages/main/MainPage';

const MainRoutes = () => {
    return (
        <Routes>
            <Route element={<LoginPage />} path='/' />
            <Route element={<RegisterPage />} path='/register' />
            <Route element={<MainPage />} path='/main' />
        </Routes>
    )
}

export default MainRoutes;