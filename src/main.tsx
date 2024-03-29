import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Accordion from '../src/pages/accordion.tsx';
import ColorGenerator from './pages/color-generator.tsx';
import Star from '../src/pages/star.tsx';
import ImageSlider from './pages/image-slider.tsx';
import InfiniteScroll from './pages/infinite-scroll.tsx';
import TreeView from './pages/tree-view.tsx';
import QrCodeGenerator from './pages/qr-code.tsx';
import ScrollIndicator from './pages/scroll-indicator.tsx';
import Tabs from './pages/tabs.tsx';
import Modal from './pages/modal.tsx';
import Github from './pages/github-profile-finder.tsx';
import Autocomplete from './pages/autocomplete.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/accordion',
    element: <Accordion />,
  },
  {
    path: '/color-generator',
    element: <ColorGenerator />,
  },
  {
    path: '/star-rating',
    element: <Star />,
  },
  {
    path: '/image-slider',
    element: <ImageSlider />,
  },
  {
    path: '/infinite-scroll',
    element: <InfiniteScroll />,
  },
  {
    path: '/tree-view',
    element: <TreeView />,
  },
  {
    path: '/qr-code',
    element: <QrCodeGenerator />,
  },
  {
    path: '/scroll-indicator',
    element: <ScrollIndicator />,
  },
  {
    path: '/tabs',
    element: <Tabs />,
  },
  {
    path: '/modal',
    element: <Modal />,
  },
  {
    path: '/github-profile-finder',
    element: <Github />,
  },
  {
    path: '/autocomplete',
    element: <Autocomplete />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
