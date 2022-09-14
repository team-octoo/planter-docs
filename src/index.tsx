import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Documentation from './sites/Documentation/Documentation';
import Community from './sites/Community/Community';
import DocsSectionPage from './sites/Documentation/pages/DocsSectionPage/DocsSectionPage';
import DocsSectionIndexPage from './sites/Documentation/pages/DocsSectionPage/DocsSectionIndexPage';
import DocsSubSectionPage from './sites/Documentation/pages/DocsSubSectionPage/DocsSubSectionPage';
import FlavoursPage from './sites/Documentation/pages/FlavoursPage/FlavoursPage';
import Main from './sites/Main/Main';
import ConfigurationExportPage from './sites/Documentation/pages/ConfigurationExportPage/ConfigurationExportPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="*" element={ <App /> }>
                <Route path="docs/*" element={ <Documentation /> }/>
                <Route path="community/*" element={ <Community /> } />
                <Route path="*"  element={ <Main /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);