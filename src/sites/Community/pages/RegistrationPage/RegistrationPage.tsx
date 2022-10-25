import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, LogoOctoo } from '../../../../components/basics';
import { ControlledForm, Input } from '../../../../components/elements';
import Select from '../../../../components/elements/FormControls/Select';
import useDirectus from '../../../../state/hooks/useDirectus/useDirectus';
import useDirectusAuth from '../../../../state/hooks/useDirectus/useDirectusAuth/useDirectusAuth';

interface Props {};

const RegistrationPage: FC<Props> = () => {
    const { invite, loading, error } = useDirectusAuth();
    
    console.log('error', error)
    
    const handleLogin = async (credentials: any) => {
        console.log(credentials)
        const resp = await invite(credentials.email);
        console.log('resp', resp)
        // await login(credentials);
        // navigate('..');
    }
    
    return (
        <div className="relative h-full flex flex-col items-center justify-center p-10">
            <div className="min-w-[25vw] h-full flex-1 flex flex-col justify-center">
                <div className="mb-6">
                    <Icon name="account-circle" size="2rem" className="mb-2 mx-auto" />
                    <h3 className="text-2xl font-medium text-center">Hi there!</h3>
                    <p className="text-center text-stone-600">Register to join our community</p>
                </div>
                <ControlledForm onSubmit={ handleLogin }>
                    <div className="grid grid-cols-2 gap-4">
                        {/* <div className="col-span-1">
                            <Input name="first_name" placeholder="First name" /> 
                        </div>
                        <div className="col-span-1">
                            <Input name="last_name" placeholder="Last name" /> 
                        </div> */}
                        <div className="col-span-2">
                            <Input name="email" placeholder="Email" required /> 
                        </div>
                        {/* <div className="col-span-2">
                            <hr />
                        </div>
                        <div className="col-span-2">
                            <Select label="Role" name="role">
                                <option>Function 1</option>
                                <option>Function 2</option>
                                <option>Function 3</option>
                            </Select>
                        </div>
                        <div className="col-span-2">
                            <hr />
                        </div>
                        <div className="col-span-1">
                            <Input name="password" placeholder="Password" type="password" />
                        </div>
                        <div className="col-span-1">
                            <Input name="password_confirm" placeholder="Password confirm" type="password" />
                        </div> */}
                    </div>
                    <Button 
                        type="submit" 
                        className="mx-auto mt-4" 
                        icon="arrow-right"
                        disabled={ loading }
                    >Request invitation</Button>
                </ControlledForm>
            </div>
            <div className="flex items-center justify-between gap-14 border border-stone-300 p-6 rounded-lg">
                <div>
                    <h3 className="font-medium text-lg">Already have an account?</h3>
                    <p className="text-stone-600">Sign in instead</p>
                </div>
                <Link to="../login">
                    <Button icon="arrow-right">Login</Button>
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

export default RegistrationPage;