import { FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import { BreadCrumbNavBar } from '../../../../components/elements';
import { MainSection } from '../../../../types/documentation/sections';

interface Props {};

const DocsSectionIndexPage: FC<Props> = () => {    
    const { mainSection } = useOutletContext<{ mainSection: MainSection | null }>();
    
    return (
        <div className="px-12">
            <div className="mb-4">
                <BreadCrumbNavBar baseUri="docs" crumbs={[{
                    label: mainSection?.name || 'Main section',
                    to: mainSection?.uri || '#'
                }]} />
            </div>
            <div className="w-full">
                <h1 className="text-2xl font-medium mb-1">{ mainSection?.name }</h1>
                <h2 className="text-lg font-medium text-stone-500">{ mainSection?.description }</h2>
            </div>
            <hr className="my-8" />
        </div>
    )
}

export default DocsSectionIndexPage;