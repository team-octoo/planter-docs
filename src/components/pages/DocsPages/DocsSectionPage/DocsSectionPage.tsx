import { FC, useMemo } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import useDirectus from '../../../../state/hooks/useDirectus/useDirectus';
import { MainSection } from '../../../../types/documentation/sections';
import { BookLoader, Icon } from '../../../basics';
import { BreadCrumbNavBar } from '../../../elements';

interface Props {};

const DocsSectionPage: FC<Props> = () => {
    const { sectionIdentifier } = useParams<any>();
    const { data: requestedMainSection, loading: requestingMainSection } = useDirectus<[MainSection]>('sections', {
        filter: {
            'uri': sectionIdentifier,
        },
        limit: 1
    })
    
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