import { jsx as _jsx } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(_jsx(StrictMode, { children: _jsx(HashRouter, { children: _jsx(App, {}) }) }));
}
else {
    console.error('Failed to find the root element');
}
