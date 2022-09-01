import classNames from 'classnames';
import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { useEffectOnce } from '../../../state/hooks/useEffectOnce/useEffectOnce';
import { Icon } from '../../basics';

interface Props {};

const results = [1, 2, 3]

const GlobalSearch = () => {
    const searchFieldInput = useRef<HTMLInputElement>(null)
    const searchFieldContainer = useRef<HTMLDivElement>(null)
    const [ searchQuery, setSearchQuery ] = useState<string>('');
    const [ searchActive, setSearchActive ] = useState(false);
    
    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
            
        const clickedOutside = !searchFieldContainer.current?.contains(target);
        
        if (clickedOutside) {
            setSearchActive(false);
        } else {
            setSearchActive(true);
        }
        
    }
    
    useEffectOnce(() => {
        window.addEventListener('click', handleClickOutside);
        
        return () => window.removeEventListener('click', handleClickOutside);
    })
    
    const searchSuggestions = ['React', 'Vue', 'setup'];
    
    return (<>
        <div
            ref={ searchFieldContainer }
            onClick={() => setSearchActive(true)}
            className={ classNames(
                'relative mt-2 z-10',
                searchActive && 'drop-shadow-xl'
            )}
        >
            <div 
                className={classNames(
                    'p-4 flex items-center gap-2 relative bg-white border-t border-x border-stone-200',
                    searchActive ? 'border-opacity-100 rounded-t-xl' : 'border-opacity-0'
                )}
            >
                <Icon name="search" size="1rem" className="text-stone-400" />
                <input 
                    ref={ searchFieldInput }
                    name="query"
                    value={ searchQuery }
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Search ${ window.location.host }`} 
                    autoComplete="off"
                    className="placeholder:text-stone-400 w-full outline-none focus:outline-none focus-within:outline-none" 
                />
                {/* <span ></span> */}
            </div>
            <div 
                className={classNames(
                    'absolute inset-x-0 border-x border-b border-stone-200 rounded-b-xl bg-white overflow-hidden',
                    searchActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
            >
                <div className="px-4 mb-4">
                    <hr />
                </div>
                <div className="px-4">
                    { !!searchQuery ? 
                        <p className="text-stone-600">Results for <span>{ searchQuery }</span></p> :
                        <p className="text-stone-400">
                            Start by searching { searchSuggestions.map((suggestion, index) => (
                                <Fragment key={ index }><span className="text-stone-600 underline underline-offset-2" onClick={() => setSearchQuery(suggestion)}>{ suggestion }</span>, </Fragment>
                            ))} ...
                        </p>
                    }
                </div>
                <div className="p-4">
                    <ul className="grid grid-cols-3 gap-4">
                        { results.map(() => (
                            <li className="col-span-1 block border border-stone-200 p-5 rounded-lg">
                                <h3 className="">Setup for React</h3>
                                <h4 className="text-stone-400 whitespace-nowrap overflow-hidden text-ellipsis">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, cum?</h4>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4 bg-emerald-50">
                    <button>
                        <span className="text-emerald-600">Looking to get started?</span>&nbsp;&nbsp;<span className="text-emerald-700 font-medium inline-flex items-center">Follow our tutorial!&nbsp;<Icon name="arrow-right" size="1.3rem" /></span>
                    </button>
                </div>
            </div>
        </div>
    </>)
}

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