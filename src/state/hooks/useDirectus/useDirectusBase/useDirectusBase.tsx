import create from 'zustand'
import UseDirectusBase from './useDirectusBase.types';

const useDirectusBase = () => create<UseDirectusBase>((set) => ({
    data: null,
    error: null,
    loading: false,
    
    requestInitiated: (clearData: boolean = false) => set({ 
        loading: true, 
        error: null,
        ...(clearData && { data: null }) 
    }),
    
    setData: (data: any) => set({ data, loading: false }),
    clearData: () => set({ data: null }),
    
    setError: (error: any) => set({ error, loading: false }),
    clearError: () => set({ error: null }),
    
    setLoading: (loading: boolean) => {
        set({ loading, error: null })
    },
}))();

export default useDirectusBase;