import { FC } from 'react';
import { Button, Icon } from '../../../../components/basics';
import { ControlledForm, Input } from '../../../../components/elements';

interface Props {};

const PasswordResetPage: FC<Props> = () => {
    return (
        <div className="relative h-full flex flex-col items-center justify-center p-10">
            <div className="min-w-[25vw] h-full flex-1 flex flex-col justify-center">
                <div className="mb-6">
                    <Icon name="lock-password" size="2rem" className="mb-2 mx-auto" />
                    <h3 className="text-2xl font-medium text-center">Password reset</h3>
                    <p className="text-center text-stone-600">Enter a new password</p>
                </div>
                <ControlledForm>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <Input name="password" placeholder="New password" type="password" />
                        </div>
                        <div className="col-span-2">
                            <Input name="password_confirm" placeholder="Confirm password" type="password" />
                        </div>
                    </div>
                    <Button 
                        type="submit" 
                        className="mx-auto mt-4" 
                        icon="arrow-right"
                    >Save password</Button>
                </ControlledForm>
            </div>
        </div>
    )
}

export default PasswordResetPage;