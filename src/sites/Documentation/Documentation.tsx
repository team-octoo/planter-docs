import classNames from 'classnames';
import { FC, PropsWithChildren, useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Icon } from '../../components/basics';
import CenteringLayout from '../../components/layouts/CenteringLayout';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import DocsMainPage from './pages/DocsMainPage/DocsMainPage';
import DocsSectionIndexPage from './pages/DocsSectionPage/DocsSectionIndexPage';
import DocsSectionPage from './pages/DocsSectionPage/DocsSectionPage';
import DocsSubSectionPage from './pages/DocsSubSectionPage/DocsSubSectionPage';
import FlavoursPage from './pages/FlavoursPage/FlavoursPage';

interface Props extends PropsWithChildren {};

const Documentation: FC<Props> = ({ children }) => {
    const [ open, setOpen ] = useState(true);

    const toggleMenu = () => setOpen(s => !s);
    
    return (
        <div className="flex flex-col h-full bg-stone-50">
            <Header />
            <CenteringLayout>
                <div className="flex-1 flex h-full">
                    <SideMenu open={ open } baseUri="/docs" />
                    <main className="py-8 w-full relative">
                        <button
                            onClick={ toggleMenu }
                            className={classNames(
                                'absolute left-0 top-8 -translate-x-1/2',
                                'w-6 h-6 flex items-center justify-center',
                                'bg-white border border-emerald-400 rounded-full',
                                'origin-right'
                            )}
                        >
                            <div className={ open ? 'rotate-180' : 'rotate-0' }>
                                <Icon name="arrow-right-s" className="text-emerald-400" />
                            </div>
                        </button>
                        <Routes>
                            <Route index element={ <Navigate to="getting-started/installation" /> }/>
                                
                            <Route path=":sectionIdentifier" element={ <DocsSectionPage /> }>
                                <Route index element={ <DocsSectionIndexPage /> } />
                                <Route path=":subSectionIdentifier" element={ <DocsSubSectionPage /> } />
                            </Route>
                        
                            <Route path="flavours">
                                <Route index element={ <FlavoursPage /> } />
                                <Route path=":flavour" element={ <FlavoursPage /> } />
                            </Route>
                        </Routes>
                    </main>
                </div>
            </CenteringLayout>
        </div>
    )
}

export default Documentation;