import { FC, PropsWithChildren } from 'react';
import { Button } from '../../../../../components/basics';
import { ControlledForm, Input } from '../../../../../components/elements';

interface Props extends PropsWithChildren {};

const PasswordModule: FC<Props> = ({ children }) => {
    return (
        <div className="flex items-center gap-3">
            <Button type="submit">Request new password</Button>
            <p>We will send you a link where you can reset your password.</p>
        </div>
    )
}

export default PasswordModule;