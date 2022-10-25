import { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReleaseTimeline } from '../../../../components/elements';
import TestCounter from '../../../../components/elements/TestCounter/TestCounter';
import useDirectusBase from '../../../../state/hooks/useDirectus/useDirectusBase/useDirectusBase';
import { useEffectOnce } from '../../../../state/hooks/useEffectOnce/useEffectOnce';

interface Props extends PropsWithChildren {};

const StartPage: FC<Props> = ({ children }) => {
    const navigate = useNavigate()
    const [ directus ] = useDirectusBase();

    useEffectOnce(() => {
        (async () => {
            const token = await directus.auth.token
            if (!token) {
                navigate('login')
            }
        })()
    })
    
    return (
        <div className="py-12">
            <ReleaseTimeline />
            <TestCounter />
        </div>
    )
}

export default StartPage;