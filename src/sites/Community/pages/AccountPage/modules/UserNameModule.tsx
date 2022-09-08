import { FC, PropsWithChildren } from 'react';
import { ControlledForm, Input } from '../../../../../components/elements';

interface Props extends PropsWithChildren {};

const UserNameModule: FC<Props> = ({ children }) => {
    return (
        <div>
            <ControlledForm>
                <Input name="username" placeholder="Username" defaultValue="johndoe" disabled />
            </ControlledForm>
        </div>
    )
}

export default UserNameModule;