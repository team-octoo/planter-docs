import { FC } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import CenteringLayout from '../../components/layouts/CenteringLayout';
import Header from './components/Header/Header';
import AccountPage from './pages/AccountPage/AccountPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PasswordResetPage from './pages/PasswordResetPage/PasswordResetPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import StartPage from './pages/StartPage/StartPage';

interface Props {};

const Community: FC<Props> = () => {
    return (
        <div className="h-full flex flex-col">
            <Header />
            <CenteringLayout>
                <Routes>
                    <Route index element={ <StartPage /> } />
                    <Route path="login" element={ <LoginPage /> } />
                    <Route path="register" element={ <RegistrationPage /> } />
                    <Route path="account">
                        <Route index element={ <AccountPage /> } />
                        <Route path="password-reset" element={ <PasswordResetPage /> } />
                    </Route>
                </Routes>
            </CenteringLayout>
        </div>
    )
}

export default Community;