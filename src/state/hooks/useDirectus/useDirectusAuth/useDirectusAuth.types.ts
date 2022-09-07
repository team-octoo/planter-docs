interface IDirectusAuthMethods {
    login: () => Promise<void>
}

interface IDirectusAuthProperties {
    token: string | null,
    loading: boolean;
    error: any | null
}

interface IDirectusAuthState extends IDirectusAuthMethods, IDirectusAuthProperties {}

type UseDirectusAuth = () => IDirectusAuthState

export default UseDirectusAuth;