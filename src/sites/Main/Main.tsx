import { FC, PropsWithChildren } from 'react';
import { Route, Routes } from 'react-router-dom';
import CenteringLayout from '../../components/layouts/CenteringLayout';
import Header from './components/Header/Header';
import StartPage from './pages/StartPage/StartPage';

interface Props extends PropsWithChildren {};

const Main: FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col h-full">
            <Header />
            <CenteringLayout className="flex-1">
                <Routes>
                    <Route path="*" element={<StartPage />} />
                </Routes>
            </CenteringLayout>
        </div>
    )
}

export default Main;