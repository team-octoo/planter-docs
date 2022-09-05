import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import FlavoursPage from './components/pages/FlavoursPage/FlavoursPage';
import DocsMainPage from './components/pages/DocsPages/DocsMainPage/DocsMainPage';
import DocsSectionPage from './components/pages/DocsPages/DocsSectionPage/DocsSectionPage';
import DocsSubSectionPage from './components/pages/DocsPages/DocsSubSectionPage/DocsSubSectionPage';
import DocsSectionIndexPage from './components/pages/DocsPages/DocsSectionPage/DocsSectionIndexPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <App /> }>
          <Route path="docs" element={ <DocsMainPage /> }>
            <Route index element={ <Navigate to="getting-started/installation" /> }/>
            
            <Route path=":sectionIdentifier" element={ <DocsSectionPage /> }>
              <Route index element={ <DocsSectionIndexPage /> } />
              <Route path=":subSectionIdentifier" element={ <DocsSubSectionPage /> } />
            </Route>
            
            <Route path="flavours" element={ <Outlet /> }>
              <Route index element={ <FlavoursPage /> } />
              <Route path=":flavour" element={ <FlavoursPage /> } />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
