import { FC, useMemo } from 'react';
import useDirectus from '../../../state/hooks/useDirectus/useDirectus';
import { MainSection } from '../../../types/documentation/sections';
import Aside from './Aside/Aside';
import MenuSection from './MenuSection/MenuSection';

interface Props {
  baseUri: string
}

const SideMenu: FC<Props> = ({ baseUri }) => {
  const { data: articles } = useDirectus('sections', {
    fields: ['*', 'sections.uri', 'sections.name']
  });
  
  const sections = useMemo<MainSection[]>(() => {
    return [
      ...(articles || []),
      // {
      //   name: 'Getting started',
      //   icon: 'speed',
      //   id: 'getting-started',
      //   sections: [
      //     { name: 'Installation', id: 'installation' },
      //     { name: 'Quick start', id: 'quick-start', sections: [
      //       { name: 'React', id: 'react', sections: [
      //         { name: 'Basic', id: 'test'}
      //       ]},
      //       { name: 'Vue', id: 'vue' },
      //       { name: 'Other frameworks', id: 'other' },
      //     ]},
      //   ]
      // },
      {
        name: 'Flavours',
        icon: 'folders',
        uri: 'flavours',
        sections: [
          { name: 'Default flavours', uri: 'default' },
          { name: 'Custom flavours', uri: 'custom' },
        ]
      },
    ]
  }, [articles])
    
  return (
    <Aside className="h-full w-1/5 border-r border-stone-200">
      <div className="py-6 pr-6">
        <ul>
          { sections.map((section, index) => (
            <li 
              key={ index }
              className="mb-2 last:mb-0"
            >
              <MenuSection baseUri={ baseUri } { ...section } />
            </li>
          ))}
        </ul>
      </div>
    </Aside>
  );
}

export default SideMenu;