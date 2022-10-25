import { FC, useEffect, useMemo } from 'react';
import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom';
import { BookLoader } from '../../../../components/basics';
import useDirectus from '../../../../state/hooks/useDirectus/useDirectus';
import { MainSection } from '../../../../types/documentation/sections';

interface Props {};

const DocsSectionPage: FC<Props> = () => {
    const { sectionIdentifier } = useParams<any>();
    const { data: requestedMainSection, loading: requestingMainSection, refetch: refetchMainSectionData } = useDirectus<[MainSection]>('sections', {
        filter: {
            'uri': sectionIdentifier,
        },
        limit: 1
    }, 'loading');
    
    const mainSection = useMemo(() => {
        if (requestedMainSection) {
            const [ mainSectionPageData ] = requestedMainSection;
            return mainSectionPageData;
        } else {
            return null
        }
    }, [requestedMainSection]);
    
    const outletContext = useMemo(() => (
        {
            mainSection,
        }
    ), [mainSection]);
    
    useEffect(() => {
        refetchMainSectionData()
    }, [sectionIdentifier]);
    
    return (
        <div className="flex flex-col h-full">
            <div className="flex-1">
                { requestingMainSection ? (
                    <div className="h-full w-full flex items-center justify-center">
                        <BookLoader />
                    </div>
                ) : <Outlet context={ outletContext } /> } 
            </div>
        </div>
    )
}

export default DocsSectionPage;