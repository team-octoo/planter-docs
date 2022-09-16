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
                <div className="flex gap-3">
                    <a href="https://github.com/team-octoo/planter-cli" target="_blank" className="flex items-center gap-2 py-2 px-3 border border-stone-300 rounded-full">
                        <Icon name="github" />
                        <span className="font-medium">GitHub</span>
                    </a>
                    <Link to="/community" className="flex items-center gap-2 py-2 px-3 border border-stone-300 rounded-full">
                        <Icon name="group-2" />
                        <span className="font-medium">Community</span>
                    </Link>
                </div>
            </div>
        </BaseHeader>
    )
}

export default Header;