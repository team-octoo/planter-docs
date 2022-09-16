import { FC, PropsWithChildren } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icon } from '../../../../components/basics';
import { BaseHeader } from '../../../../components/elements';

interface Props extends PropsWithChildren {};

const Header: FC<Props> = () => {
    
    
    return (
        <BaseHeader>
            <div className="flex items-center justify-end gap-3 h-full">
                <Link to="/docs" className="flex items-center gap-2 py-2 px-3 border border-stone-300 rounded-full">
                    <Icon name="book-mark" />
                    <span className="font-medium">Documentation</span>
                </Link>
                <Link to="/community" className="flex items-center gap-2 py-2 px-3 border border-stone-300 rounded-full">
                    <Icon name="group-2" />
                    <span className="font-medium">Community</span>
                </Link>
            </div>
        </BaseHeader>
    )
}

export default Header;