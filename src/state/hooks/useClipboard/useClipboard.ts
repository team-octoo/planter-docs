import { useState } from "react";
import UseClipboard from "./useClipboard.types";

const useClipboard: UseClipboard = () => {
    const [ error, setError ] = useState<null | any>(null);
    const [ loading, setLoading ] = useState(false);
    
    const write = (text: string) => {
        setError(null);
        setLoading(true);
        navigator.clipboard.writeText(text)
            .catch((error) => setError(error));
        setLoading(false);
    }
    
    return {
        loading,
        error,
        write
    }
}

export default useClipboard;