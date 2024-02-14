import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Accordion from '../src/pages/accordion.tsx';
import ColorGenerator from './pages/color-generator.tsx';
import Star from '../src/pages/star.tsx';
import ImageSlider from './pages/image-slider.tsx';
import InfiniteScroll from './pages/infinite-scroll.tsx';
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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
