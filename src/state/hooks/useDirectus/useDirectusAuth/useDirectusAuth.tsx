import { useEffect, useState } from "react";
import { EmailAuthentication } from "../../../../types/auth";
import useDirectusBase from "../useDirectusBase/useDirectusBase";

const useDirectusAuth = () => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<any | null>(null)
    const [ token, setToken ] = useState<string | null>(null)
    const [ directus ] = useDirectusBase();
    
    useEffect(() => {
        (async () => {
           const response = await directus.auth.token;
           setLoading(false);
           setToken(response);
        })()
    }, [directus])
    
    const login = async (credentials: EmailAuthentication) => {
        try {
            return await directus.auth.login(credentials);
        } catch (error) {
            setError(error)
        }
    }
    
    return {
        login,
        token,
        loading,
        error
    }
}

export default useDirectusAuth;