import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {};

const DocsMainPage: FC<Props> = () => {
    return (
        <Outlet />
    )
}

export default DocsMainPage;