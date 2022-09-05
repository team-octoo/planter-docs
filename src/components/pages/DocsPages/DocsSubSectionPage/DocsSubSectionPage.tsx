import { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import useDirectus from '../../../../state/hooks/useDirectus/useDirectus';
import { MainSection, SubSection } from '../../../../types/documentation/sections';
import { BreadCrumbNavBar } from '../../../elements';

interface Props extends PropsWithChildren {};

const DocsSubSectionPage: FC<Props> = ({ children }) => {
    const { subSectionIdentifier } = useParams<any>();
    const { mainSection } = useOutletContext<{ mainSection: MainSection | null }>();
    const { data: requestedSubSection, refetch: refetchCurrentPage } = useDirectus<SubSection[]>('articles', {
        filter: {
            'parent': mainSection?.id,
            'uri': subSectionIdentifier
        }
    })
    
    useEffect(() => {
        if (subSectionIdentifier) {
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
    
    return (
        <div className="px-12">
            <div className="mb-4">
                <BreadCrumbNavBar baseUri="docs" crumbs={ breadCrumbs } />
            </div>
            <div className="w-full">
                <h1 className="text-2xl font-medium mb-1">{ subSection?.name }</h1>
                <h2 className="text-lg font-medium text-stone-500">{ subSection?.description }</h2>
            </div>
            <hr className="my-8" />
        </div>
    )
}

export default DocsSubSectionPage;