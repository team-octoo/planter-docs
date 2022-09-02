import create from 'zustand';
import { persist } from 'zustand/middleware';
import UseRecentSearchStore from './useRecentSearchStore.types';

const useRecentSearchStore = create(
    persist<UseRecentSearchStore>(
        (set, get) => ({
            recentlyClicked: [],
            
            add: (newSearch) => {
                const { recentlyClicked } = get();
                const latestSearches = recentlyClicked.splice(0, 2);
                const store = [ newSearch, ...latestSearches ];
                
                set({
                    recentlyClicked: store
                })
            }
        }),
        {
            name: 'recentSearches',
            getStorage: () => window.localStorage,
        }
    )
)

export default useRecentSearchStore;