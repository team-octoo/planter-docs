import { FC } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import CenteringLayout from '../../components/layouts/CenteringLayout';
import Header from './components/Header/Header';
import AccountPage from './pages/AccountPage/AccountPage';
import LoginPage from './pages/LoginPage/LoginPage';
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
                    <Route path="account" element={ <AccountPage /> } />
                </Routes>
            </CenteringLayout>
        </div>
    )
}

export default Community;