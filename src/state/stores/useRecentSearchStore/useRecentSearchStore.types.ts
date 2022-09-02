interface UseRecentSearchStore {
    recentlyClicked: any[];
     
    add: (newSearch: any) => void;
}

export default UseRecentSearchStore;