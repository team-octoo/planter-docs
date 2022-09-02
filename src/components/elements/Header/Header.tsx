import classNames from 'classnames';
import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { useEffectOnce } from '../../../state/hooks/useEffectOnce/useEffectOnce';
import { Icon } from '../../basics';
import GlobalSearch from './GlobalSearch/GlobalSearch';

interface Props {};

const Header: FC<Props> = () => {
    return (
        <header className="bg-white border-b border-stone-200 ">
            <div className="container mx-auto grid grid-cols-12 ">
                <div className="col-span-3 py-6">
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm text-stone-500">@team-octoo</h2>
                        <span className="text-sm text-stone-500">/</span>
                        <h1 className="font-semibold tracking-wide text-lg">Planter</h1>
                    </div>
                </div>
                <div className="col-span-9">
                    <GlobalSearch />
                </div>
            </div>
        </header>
    )
}

export default Header;