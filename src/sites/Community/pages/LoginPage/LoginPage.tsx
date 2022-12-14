import { FC, PropsWithChildren, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Icon, LogoOctoo } from '../../../../components/basics';
import { ControlledForm, Input } from '../../../../components/elements';
import useDirectusAuth from '../../../../state/hooks/useDirectus/useDirectusAuth/useDirectusAuth';
import useDirectusBase from '../../../../state/hooks/useDirectus/useDirectusBase/useDirectusBase';
import { EmailAuthentication } from '../../../../types/auth';

interface Props {};

const LoginPage: FC<Props> = () => {
    const navigate = useNavigate()
    const { loading, token, login } = useDirectusAuth();
    
    const handleLogin = async (credentials: any) => {
        await login(credentials);
        navigate('..');
    }
    
    if (loading) return <>Loading</>
    else if (token) return <Navigate to=".." />
    
    return (
        <div className="relative h-full flex flex-col items-center justify-center p-10">
            <div className="min-w-[25vw] h-full flex-1 flex flex-col justify-center">
                <div className="mb-6">
                    <Icon name="account-circle" size="2rem" className="mb-2 mx-auto" />
                    <h3 className="text-2xl font-medium text-center">Welcome back!</h3>
                    <p className="text-center text-stone-600">Login or register to join our community</p>
                </div>
                <ControlledForm onSubmit={ handleLogin }>
                    <div className="mb-4">
                        <Input name="email" placeholder="Email" autoFocus />
                    </div>
                    <div>
                        <Input name="password" placeholder="Password" type="password" />
                    </div>
                    <Button 
                        type="submit" 
                        className="mx-auto mt-4" 
                        icon="arrow-right"
                        disabled={ loading }
                    >Login</Button>
                </ControlledForm>
            </div>
            <div className="flex items-center justify-between gap-14 border border-stone-300 p-6 rounded-lg">
                <div>
                    <h3 className="font-medium text-lg">Don't have an account (yet)?</h3>
                    <p className="text-stone-600">Sign up to contribute to our community</p>
                </div>
                <Link to="../register">
                    <Button icon="arrow-right">Register here</Button>
                </Link>
            </div>
            <div className="mt-10">
                <a href="https://octoo.be" target="_blank" rel="noreffer noopener">
                    <p className="text-sm text-stone-500 mb-1 text-center">A project from</p>
                    <LogoOctoo className="w-28 opacity-50 mx-auto" />
                </a>
            </div>
        </div>
    )
}

export default LoginPage;