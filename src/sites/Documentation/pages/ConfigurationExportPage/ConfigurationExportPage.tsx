import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useUA } from 'use-ua-parser-js';
import { BookLoader, Button, Icon } from '../../../../components/basics';
import { BreadCrumbNavBar } from '../../../../components/elements';
import ErrorPageLayout from '../../../../components/layouts/ErrorPageLayout/ErrorPageLayout';
import useDirectus from '../../../../state/hooks/useDirectus/useDirectus';
import { useEffectOnce } from '../../../../state/hooks/useEffectOnce/useEffectOnce';
import { Flavour } from '../../../../types/documentation/flavours';
import { BreadCrumb } from '../../../../types/navigation/breadcrumbs';

interface Props {};

const IDButton: FC<{ id: string }> = ({ id }) => {
    return (
        <div className="group rounded-full px-3 py-1 border border-stone-300 flex items-center w-fit select-all">
            <Icon name="hashtag" noStyle size="1rem" />
            <span className="text-sm select-none">ID</span>
            <div className="ml-0 group-hover:ml-2"></div>
            <span className="text-sm text-stone-600 duration-400 whitespace-nowrap overflow-hidden max-w-[0vw] group-hover:max-w-[100vw]">{ id }</span>
        </div>
    )
}

const ConfigurationExportPage: FC<Props> = () => {
    const UADetails = useUA();
    const isMacOs = UADetails?.os.name === 'Mac OS';
    
    const saveCommand = (e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            // Prevent the Save dialog to open
            e.preventDefault();
            // Place your code here
            console.log('CTRL + S');
          }
    }
    
    useEffectOnce(() => {
        document.addEventListener('keydown', saveCommand);
        return () => document.removeEventListener('keydown', saveCommand);
    })
        
    const { flavourId } = useParams<any>();
    const { data: flavour, loading: requestingFlavour, error: requestFlavourError } = useDirectus<Flavour>('flavours', {
        id: flavourId,
        single: true,
        fields: ['*.*.*']
    });
    
    const crumbs = useMemo<BreadCrumb[]>(() => {
        return [
            { label: 'Flavours', to: 'flavours' },
            { label: 'Export', to: 'export' },
            { label: `(${flavour?.framework.name}) ${flavour?.name}` || '' },
        ]
    }, [flavour])
    
    if (requestFlavourError) return (
        <ErrorPageLayout
            icon="file-damage" 
            requestUnit="configuration" 
            error="This configuration doesn't exist"
            action={<Button icon="arrow-right" to="/docs/flavours">View flavours</Button>}
        />
    )
    
    else if (requestingFlavour || !flavour) return (
        <div className="h-full flex items-center justify-center px-12">
            <BookLoader />
        </div>
    )
    
    else return (
        <div className="px-12 w-full">
            <div className="w-full">
                <div className="mb-4">
                    <BreadCrumbNavBar baseUri="docs" crumbs={ crumbs } />
                </div>
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-2xl font-medium mb-1">{ flavour.name }</h1>
                        <h2 className="text-lg font-medium text-stone-500">{ flavour?.description }</h2>
                        {/* <div className="mt-2">
                            <IDButton id={ flavour.id } />
                        </div> */}
                    </div>
                    <div>
                        <h3 className="mb-2 text-right text-stone-600">Supported frameworks</h3>
                        <div className="rounded-full px-3 py-1 border border-stone-300 flex items-center ml-auto w-fit">
                            <Icon name="code" size="1rem" className="mr-2" />
                            <span className="text-sm">{ flavour.framework.name }</span>
                        </div>
                    </div>
                </div>
              </div>
              <hr className="my-8" />
              <div className="flex items-center gap-3">
                <Button icon="download">Save configuration</Button>
                <span className="text-stone-600">or</span>
                <span className="text-stone-600">
                    { isMacOs ? <kbd>⌘</kbd> : <kbd>crtl</kbd> } + <kbd>s</kbd></span>
              </div>
        </div>
    )
}

export default ConfigurationExportPage;