import classNames from "classnames";
import { Fragment, useEffect, useRef, useState } from "react";
import useDirectus from "../../../../state/hooks/useDirectus/useDirectus";
import { useEffectOnce } from "../../../../state/hooks/useEffectOnce/useEffectOnce";
import { AnimatedList, Icon } from "../../../basics";
import { debounce } from 'throttle-debounce';
import ResultCard from "./ResultCard";
import useRecentSearchStore from "../../../../state/stores/useRecentSearchStore/useRecentSearchStore";

const results = [1, 2, 3]

const GlobalSearch = () => {
    const { data: searchResults, refetch, clearData } = useDirectus<any[]>('articles', { 
        search: null, 
        fields: ['*', 'parent.name'], 
        limit: 3,
        lazy: true
    });
    
    const { add: registerRecentSearch } = useRecentSearchStore();
    const searchFieldInput = useRef<HTMLInputElement>(null)
    const searchFieldContainer = useRef<HTMLDivElement>(null)
    const [ searchQuery, setSearchQuery ] = useState<string>('');
    const [ searchActive, setSearchActive ] = useState(false);
    
    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
                
        const clickedOutside = !searchFieldContainer.current?.contains(target)
        
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
    
    useEffect(() => {
        if (!!searchQuery) {
            refetch({ search: searchQuery })
        } else {
            clearData();
        }
    }, [searchQuery])
    
    const showSuggestions = !!searchQuery || searchResults?.length === 0;
    const searchSuggestions = ['Installation', 'Start', 'Setup'];
    
    return (<>
        <div
            ref={ searchFieldContainer }
            onClick={() => setSearchActive(true)}
            className={classNames(
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
                <div className="px-4 mb-4">
                    { showSuggestions ? 
                        <p className="text-stone-600">Results for <span>{ searchQuery }</span></p> :
                        <p className="text-stone-400">
                            Start by searching { searchSuggestions.map((suggestion, index) => (
                                <Fragment key={ index }><span className="text-stone-500">{ suggestion }</span>, </Fragment>
                            ))} ...
                        </p>
                    }
                </div>
                { searchResults !== null && (<div className="px-4 mb-4">
                    <div>
                        { searchResults?.length === 0 && (<>
                            <p>No results found</p>
                        </>)}
                        <AnimatedList className="grid grid-cols-3 gap-4">
                            {(searchResults)?.map((result, index) => (
                                <ResultCard 
                                    key={ index }
                                    onClick={() => registerRecentSearch(result)}
                                    result={ result } 
                                />
                            ))}
                        </AnimatedList>
                    </div>
                </div>)}
                <div className="p-4 bg-emerald-50">
                    <button>
                        <span className="text-emerald-600">Looking to get started?</span>&nbsp;&nbsp;<span className="text-emerald-700 font-medium inline-flex items-center">Follow our tutorial!&nbsp;<Icon name="arrow-right" size="1.3rem" /></span>
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default GlobalSearch;