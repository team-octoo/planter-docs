interface UseDirectusBase {
    data: any;
    error: any;
    loading: boolean;
    
    requestInitiated: (clearData?: boolean) => void;
    setData: (data: any) => void;
    clearData: () => void;
    setError: (error: any) => void;
    setLoading: (loading: boolean) => void;
}

export default UseDirectusBase;