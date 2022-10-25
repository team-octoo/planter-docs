import { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { BookLoader, Button, Icon } from '../../../../components/basics';
import { BreadCrumbNavBar } from '../../../../components/elements';
import ErrorPageLayout from '../../../../components/layouts/ErrorPageLayout/ErrorPageLayout';
import useDirectus from '../../../../state/hooks/useDirectus/useDirectus';
import { MainSection, SubSection } from '../../../../types/documentation/sections';

interface Props extends PropsWithChildren {};

const DocsSubSectionPage: FC<Props> = ({ children }) => {
    const { subSectionIdentifier } = useParams<any>();
    const { mainSection } = useOutletContext<{ mainSection: MainSection | null }>();
    const { data: requestedSubSection, refetch: refetchCurrentPage, loading: requestingSubSection } = useDirectus<SubSection[]>('articles', {
        filter: {
            'parent': mainSection?.id,
            'uri': subSectionIdentifier
        },
        lazy: true,
        fields: ['*', 'frameworks.frameworks_id.*']
    }, 'loading');
        
    useEffect(() => {
        if (subSectionIdentifier && !!mainSection) {
            refetchCurrentPage();
        }
    }, [subSectionIdentifier])
    
    const subSection = useMemo(() => {
        if (requestedSubSection) {
            const [ mainSectionPageData ] = requestedSubSection;
            return mainSectionPageData;
        } else {
            return null
        }
    }, [requestedSubSection]);
    
    const breadCrumbs = useMemo(() => ([
        {
            label: mainSection?.name || 'Main section',
            to: mainSection?.uri || '#'
        },
        {
            label: subSection?.name || 'Sub section',
            to: subSection?.uri || '#'
        },
    ]), [mainSection, subSection])
    
    if (requestingSubSection) return (
        <div className="h-full flex items-center justify-center px-12">
            <BookLoader />
        </div>
    )
    
    else if (!subSection) return <ErrorPageLayout />
            
    return (
        <div className="px-12">
            <div className="mb-4">
                <BreadCrumbNavBar baseUri="docs" crumbs={ breadCrumbs } />
            </div>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-medium mb-1">{ subSection.name }</h1>
                    <h2 className="text-lg font-medium text-stone-500">{ subSection.description }</h2>
                </div>
                { subSection?.framework_support && (
                    <div>
                        <h3 className="mb-2 text-right text-stone-600">Supported frameworks</h3>
                        <ul className="text-right">
                            { subSection.frameworks.map((framework, index) => (
                                <li key={ index } className="rounded-full px-3 py-1 border border-stone-300 inline-flex items-center ml-2">
                                    <Icon name="code" size="1rem" className="mr-2" />
                                    <span className="text-sm">{ framework.frameworks_id.name }</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <hr className="my-8" />
            <div 
                dangerouslySetInnerHTML={{ __html: subSection?.content || '' }} 
            />
        </div>
    )
}

export default DocsSubSectionPage;