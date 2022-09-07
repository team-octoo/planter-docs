import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {};

const BaseHeader: FC<Props> = ({ children }) => {
    return (
        <header className="bg-white border-b border-stone-200 sticky top-0 backdrop-blur bg-opacity-60 z-10">
            <div className="container mx-auto flex">
                <div className="py-6 w-1/5">
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm text-stone-500">@team-octoo</h2>
                        <span className="text-sm text-stone-500">/</span>
                        <h1 className="font-semibold tracking-wide text-lg">Planter</h1>
                    </div>
                </div>
                <div className="flex-1">
                    { children }
                </div>
            </div>
        </header>
    )
}

export default BaseHeader;