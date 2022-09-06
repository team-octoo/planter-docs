import classNames from 'classnames';
import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { useEffectOnce } from '../../../state/hooks/useEffectOnce/useEffectOnce';
import { Icon } from '../../basics';
import GlobalSearch from './GlobalSearch/GlobalSearch';

interface Props {};

const Header: FC<Props> = () => {
    return (
        <header className="bg-white border-b border-stone-200 sticky top-0 backdrop-blur bg-opacity-60">
            <div className="container mx-auto flex">
                <div className="py-6 w-1/5">
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm text-stone-500">@team-octoo</h2>
                        <span className="text-sm text-stone-500">/</span>
                        <h1 className="font-semibold tracking-wide text-lg">Planter</h1>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-between gap-6">
                    <div className="w-full">
                        <GlobalSearch />
                    </div>
                    <button className="flex items-center gap-2 py-2 px-3 border border-stone-300 rounded-full">
                        <Icon name="group-2" />
                        <span className="font-medium">Community</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;