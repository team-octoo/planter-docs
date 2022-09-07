import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../components/basics';
import { BaseHeader } from '../../../../components/elements';

interface Props extends PropsWithChildren {};

const Header: FC<Props> = ({ children }) => {
    return (
        <BaseHeader>
            <div className="flex items-center justify-end gap-6 h-full">
                <div className="flex gap-3">
                    <Link to="/docs" className="flex items-center gap-2 py-2 px-3 border border-stone-300 rounded-full">
                        <Icon name="book-mark" />
                        <span className="font-medium">Documentation</span>
                    </Link>
                    <Link to="account" className="flex items-center gap-2 py-2 px-3 border border-black rounded-full">
                        <Icon name="account-circle" />
                        <span className="font-medium">John Doe</span>
                    </Link>
                </div>
            </div>
        </BaseHeader>
    )
}

export default Header;