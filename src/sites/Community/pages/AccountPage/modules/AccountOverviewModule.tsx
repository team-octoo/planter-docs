import { FC, PropsWithChildren } from 'react';
import { Button } from '../../../../../components/basics';
import { ControlledForm, Input } from '../../../../../components/elements';

interface Props extends PropsWithChildren {};

const AccountOverviewModule: FC<Props> = ({ children }) => {
    return (
        <div>
            <ControlledForm>
                <div className="flex flex-col gap-4">
                    <Input name="current_password" placeholder="Current password" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <Input name="new_password" placeholder="New password" className="w-full" />
                        </div>
                        <div className="col-span-1">
                            <Input name="new_password_confirm" placeholder="Confirm new password" />
                        </div>
                    </div>
                </div>
                <Button type="submit" className="mt-4">Save password</Button>
            </ControlledForm>
        </div>
    )
}

export default AccountOverviewModule;