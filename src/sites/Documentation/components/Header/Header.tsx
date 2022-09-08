import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../components/basics';
import GlobalSearch from './GlobalSearch/GlobalSearch';
import { BaseHeader } from '../../../../components/elements';

interface Props {};

const Header: FC<Props> = () => {
    return (
        <BaseHeader sectionSlug="Docs">
            <div className="flex items-center justify-between gap-6 h-full">
                <div className="w-full">
                    <GlobalSearch />
                </div>
                <Link to="/community" className="flex items-center gap-2 py-2 px-3 border border-stone-300 rounded-full">
                    <Icon name="group-2" />
                    <span className="font-medium">Community</span>
                </Link>
            </div>
        </BaseHeader>
    )
}

export default Header;