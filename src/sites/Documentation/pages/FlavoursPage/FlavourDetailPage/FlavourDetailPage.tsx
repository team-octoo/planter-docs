import { FC, useLayoutEffect, useMemo } from 'react';
import { CodeBlock, github } from 'react-code-blocks';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUA } from 'use-ua-parser-js';
import { BookLoader, Button, Icon } from '../../../../../components/basics';
import { BreadCrumbNavBar } from '../../../../../components/elements';
import ErrorPageLayout from '../../../../../components/layouts/ErrorPageLayout/ErrorPageLayout';
import useBlob from '../../../../../state/hooks/useBlob/useBlob';
import useClipboard from '../../../../../state/hooks/useClipboard/useClipboard';
import useDirectus from '../../../../../state/hooks/useDirectus/useDirectus';
import { Flavour } from '../../../../../types/documentation/flavours';
import { BreadCrumb } from '../../../../../types/navigation/breadcrumbs';
import { validatedJsonTemplate } from '../../../../../utils/funcs';
import theme from '../../../../../utils/vendors/codeblock/theme';

interface Props {};

const FlavourDetailPage: FC<Props> = () => {
    const clipboard = useClipboard();
    const blob = useBlob(undefined, 'application/json;charset=utf-8')
    const UADetails = useUA();
    const { flavourId } = useParams<any>();
    const { data: flavour, loading: requestingFlavour, error: requestFlavourError } = useDirectus<Flavour>('flavours', {
        id: flavourId,
        single: true,
        fields: ['*.*.*']
    });
    
    const crumbs = useMemo<BreadCrumb[]>(() => {
        return [
            { label: 'Flavours', to: 'flavours' },
            { label: `(${flavour?.framework.name}) ${flavour?.name}` || '' },
        ]
    }, [flavour])
    
    const saveFile = () => {
        const validJsonString = validatedJsonTemplate(flavour?.template || '{}')
        blob.setContent([validJsonString]);
        blob.save('planter.config.json');
    }
    
    const copyCommand = (e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
            e.preventDefault();
            const te = validatedJsonTemplate(flavour?.template || '{}');
            clipboard.write(te)
            
            toast('Test 3', {
                autoClose: 500000
            })
        }
        
    }
    
    useLayoutEffect(() => {
        document.addEventListener('keydown', copyCommand);
        return () => document.removeEventListener('keydown', copyCommand);
    })
    
    const isMacOs = UADetails?.os.name === 'Mac OS';
    
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
        <div className="px-12 w-full h-full flex flex-col">
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
            <div className="relative border border-stone-200 bg-white rounded-lg flex-1 contain-paint overflow-scroll">
                <CodeBlock
                    text={ flavour?.template || '{}' }
                    language="json"
                    showLineNumbers={ false }
                    theme={ theme }
                />
                {/* <div className="sticky bottom-0 bg-stone-100 px-4 py-2">
                    <button className="uppercase text-sm text-stone-600 font-medium">Show all</button>
                </div> */}
            </div>
            <div className="flex justify-end items-center gap-3 mt-8">
                <Link to="planter.config.json">
                    <Button icon="download">Save configuration</Button>
                </Link>
                <span className="text-stone-600">or</span>
                <span className="text-stone-600">
                    { isMacOs ? <kbd>⌘</kbd> : <kbd>crtl</kbd> } + <kbd>C</kbd> to copy
                </span>
            </div>
        </div>
    )
}

export default FlavourDetailPage;