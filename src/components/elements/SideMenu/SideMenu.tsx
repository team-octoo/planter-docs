import { FC, useMemo } from 'react';
import useDirectus from '../../../state/hooks/useDirectus/useDirectus';
import { MenuSection as Section } from '../../../types/navigation/sections';
import Aside from './Aside/Aside';
import MenuSection from './MenuSection/MenuSection';
interface Props {}

const SideMenu: FC<Props> = (props) => {
  const { data: articles } = useDirectus('sections', {
    fields: ['*', 'sections.id', 'sections.name']
  });
  
  const sections = useMemo<Section[]>(() => {
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
        id: 'flavours',
        sections: [
          { name: 'Default flavours', id: 'default' },
          { name: 'Custom flavours', id: 'custom' },
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
              <MenuSection { ...section } />
            </li>
          ))}
        </ul>
      </div>
    </Aside>
  );
}

export default SideMenu;