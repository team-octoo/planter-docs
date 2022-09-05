import { QueryMany, Filter } from '@directus/sdk';

interface DirectusRequestOptions {
    fields?: string | string[];
    filter?: Filter<{ [key: string]: string | boolean | number }>;
    search?: string;
    limit?: number;
}

interface QueryOptions extends DirectusRequestOptions {
    lazy?: boolean;
}

type DataClearingPolicy = 
    /** Clear data when an error is thrown */
    'error' | 
     
    /** Clear data everytime data is requested, regardless of the result */
    'loading' |
    
    /** [Default] Data is "cleared", as in replaced, if a request is successfull */
    'refresh';

interface UseDirectusProperties<T> {
    data: T | null;
    loading: boolean;
    error: any;
}

interface UseDirectusMethods {
    refetch: (options?: QueryOptions) => void;
    clearData: () => void;
}

interface UseDirectus {
    <T = any>(collection: string, options?: QueryOptions, dataClearingPolicy?: DataClearingPolicy): UseDirectusProperties<T> & UseDirectusMethods;
}

export type {
    UseDirectusProperties
}
export default UseDirectus;