import classNames from 'classnames';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Icon } from './components/basics';
import { Header, SideMenu } from './components/elements';

function App() {
  const [ open, setOpen ] = useState(true);

  const toggleMenu = () => setOpen(s => !s);

  return (
    <div className="flex flex-col h-full bg-stone-50">
      <Header />
      <div className="flex-1 container mx-auto flex">
        <SideMenu open={ open } baseUri="docs" />
        <main className="py-8 w-full relative">
          <button
            onClick={ toggleMenu }
            className={classNames(
              'absolute left-0 top-8 -translate-x-1/2',
              'w-6 h-6 flex items-center justify-center',
              'bg-emerald-500 border border-emerald-400 rounded-full',
              'origin-right opacity-50 hover:opacity-100'
            )}
          >
            <div className={ open ? 'rotate-180' : 'rotate-0' }>
              <Icon name="arrow-right-s" className="text-emerald-100" />
            </div>
          </button>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
