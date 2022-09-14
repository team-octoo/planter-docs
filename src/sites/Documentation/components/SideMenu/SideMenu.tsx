import { FC, useMemo } from 'react';
import useDirectus from '../../../../state/hooks/useDirectus/useDirectus';
import { MainSection } from '../../../../types/documentation/sections';
import Aside from './Aside/Aside';
import MenuSection from './MenuSection/MenuSection';
import classNames from 'classnames';
import { LogoOctoo } from '../../../../components/basics';

interface Props {
  baseUri: string;
  open: boolean;
}

const SideMenu: FC<Props> = ({ baseUri, open }) => {
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
          { name: 'Default flavours', uri: 'category/default' },
          { name: 'Custom flavours', uri: 'category/custom' },
        ]
      },
    ]
  }, [articles])
  
  return (
    <Aside className={classNames(
      'relative min-h-full w-1/5 border-r border-stone-200 overflow-hidden',
      open ? 'w-1/5' : 'w-[0%]'
    )}>
      <div className="min-w-fit h-full flex flex-col">        
        <div className="flex-1 py-6 pr-6">
          <ul>
            { sections.map((section, index) => (
              <li 
                key={ index }
                className="mb-2 last:mb-0 whitespace-nowrap"
              >
                <MenuSection baseUri={ baseUri } { ...section } />
              </li>
            ))}
          </ul>
        </div>
        <div className="my-8 pr-6">
          <a href="https://octoo.be" target="_blank" rel="noreffer noopener">
            <p className="text-sm text-stone-500 mb-1">A project from</p>
            <LogoOctoo className="w-28 opacity-50" />
          </a>
        </div>
      </div>
    </Aside>
  );
}

export default SideMenu;