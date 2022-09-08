import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../components/basics';
import { BaseHeader } from '../../../../components/elements';
import useDirectusAuth from '../../../../state/hooks/useDirectus/useDirectusAuth/useDirectusAuth';

interface Props extends PropsWithChildren {};

const Header: FC<Props> = ({ children }) => {
    const { logout } = useDirectusAuth()
    
    return (
        <BaseHeader sectionSlug="Community">
            <div className="flex items-center justify-end gap-6 h-full">
                <div className="flex gap-3">
                    <Link to="/docs" className="flex items-center gap-2 py-2 px-3 border border-stone-300 rounded-full">
                        <Icon name="book-mark" />
                        <span className="font-medium">Documentation</span>
                    </Link>
                    <Link to="account" className="flex items-center gap-2 py-2 px-3 border border-black rounded-full">
                        <span className="font-medium">John Doe</span>
                        <Icon name="account-circle" />
                    </Link>
                    <button 
                        onClick={() => logout()}
                        className="flex items-center gap-2 ml-2"
                    >
                        <span>Log out</span>
                        <Icon name="logout-circle-r" />
                    </button>
                </div>
            </div>
        </BaseHeader>
    )
}

export default Header;