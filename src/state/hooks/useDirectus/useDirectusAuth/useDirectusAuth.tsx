import { useEffect, useState } from "react";
import { EmailAuthentication } from "../../../../types/auth";
import useDirectusBase from "../useDirectusBase/useDirectusBase";

const useDirectusAuth = () => {
    const [ loading, setLoading ] = useState(false);
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
    
    const invite = async (email: string) => {
        try {
            setLoading(true);
            const resp = await directus.users.invites.send(email, '3f25c755-9a6c-4669-9c57-01aa7b53dafe')
            setLoading(false);
            return resp;
        } catch (error) {
            setError(error)
            setLoading(false);
        }
    }
    
    const login = async (credentials: EmailAuthentication) => {
        try {
            setLoading(true);
            const resp = await directus.auth.login(credentials);
            console.log('login', resp)
            setLoading(false);
            return resp;
        } catch (error) {
            console.log('login error', error)
            setError(error);
            setLoading(false);
        }
    }
    
    const logout = async () => {
        return await directus.auth.logout();
    }
    
    return {
        login,
        logout,
        invite,
        token,
        loading,
        error
    }
}

export default useDirectusAuth;