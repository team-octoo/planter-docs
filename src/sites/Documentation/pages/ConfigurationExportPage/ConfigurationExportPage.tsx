import { FC, PropsWithChildren, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Icon } from '../../../../components/basics';
import useBlob from '../../../../state/hooks/useBlob/useBlob';
import useDirectus from '../../../../state/hooks/useDirectus/useDirectus';
import { Flavour } from '../../../../types/documentation/flavours';
import { validatedJsonTemplate } from '../../../../utils/funcs';

interface Props {};

const ConfigurationExportPage: FC<Props> = () => {
    const blob = useBlob(undefined, 'application/json;charset=utf-8')
    const { flavourId } = useParams<any>();
    const { data: flavour, loading: requestingFlavour, error: requestFlavourError } = useDirectus<Flavour>('flavours', {
        id: flavourId,
        single: true,
        fields: ['*.*.*']
    });
    
    const saveFile = useCallback(() => {
        const validJsonString = validatedJsonTemplate(flavour?.template || '{}')
        blob.setContent([validJsonString]);
        blob.save('planter.config.json');
    }, [flavour])
    
    useEffect(() => {
        if (flavour?.template) {
            setTimeout(() => {
                saveFile();
            }, 1000);
        }
    }, [flavour])
    
    if (requestingFlavour) return (
        <div className="h-full flex items-center justify-center">
            <div>
                <div className="animate-spin mb-2 mx-auto w-fit">
                    <Icon name="loader-5" size="2rem" className="" />
                </div>
                <h3 className="text-2xl font-medium text-center">Preparing download</h3>
                <p className="text-center text-stone-600">Getting the configuration file</p>
            </div>
        </div>
    )

    return (
        <div className="h-full flex items-center justify-center">
            <div>
                <Icon name="download" size="2rem" className="mb-2 mx-auto" />
                <h3 className="text-2xl font-medium text-center">Download started</h3>
                <p className="text-center text-stone-600">Downloading configuration file – { flavour?.name }</p>
                <div className="mx-auto mt-4 w-fit flex gap-3">
                    <Button icon="arrow-left" iconPlacement="start" to={'../' + flavourId}>Flavour details</Button>
                    <Button icon="restart" onClick={ saveFile }>Download again</Button>
                </div>
            </div>
        </div>
    )
}

export default ConfigurationExportPage;