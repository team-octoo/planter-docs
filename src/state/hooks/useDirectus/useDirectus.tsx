import { Directus, QueryMany } from '@directus/sdk';
import { useCallback, useState } from 'react';
import { useEffectOnce } from '../useEffectOnce/useEffectOnce';
import UseDirectus from './useDirectus.types';
import useDirectusBase from './useDirectusBase/useDirectusBase';

const useDirectus: UseDirectus = <T, >(collection: any, options: any, dataClearingPolicy = 'refresh') => {
    const [ data, setData ] = useState<T | null>(null)
    const [ error, setError ] = useState<null>(null)
    const [ loading, setLoading ] = useState<boolean>(false)
    
    const [ directus ] = useDirectusBase();
    
    const clearData = () => setData(null)
    const requestInitiated = () => {
        setError(null);
        setLoading(true);
        
        if (dataClearingPolicy === 'loading') {
            clearData();
        }
    }

    
    const requestCompleted = () => {
        setLoading(false);
    }
    
    const onSuccess = (data: T) => {
        requestCompleted();
        
        setError(null);
        setData(data);
    }
    
    const onError = useCallback((error: any) => {
        requestCompleted();
        
        setError(error);
        
        if (dataClearingPolicy === 'error') {
            clearData();
        }
    }, [dataClearingPolicy])
    
    const request = useCallback((customOptions?: any) => {
        delete options?.lazy
        delete customOptions?.lazy
        
        requestInitiated();
        directus
            .items(collection)
            .readByQuery({
                ...options,
                ...customOptions,
            })
            .then(response => {
                onSuccess(response.data as unknown as T)
            })
            .catch(error => onError(error))
    }, [collection, options])
        
    useEffectOnce(() => {
        if (!options?.lazy) {
            request();
        }
    })
    
    return {
        data,
        loading,
        error,
        refetch: request,
        clearData
    };
}

export default useDirectus;