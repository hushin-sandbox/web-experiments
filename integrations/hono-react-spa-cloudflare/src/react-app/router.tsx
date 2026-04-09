import { createBrowserRouter } from 'react-router';
import App from './App';
import About from './pages/About';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: 'about',
        Component: About,
      },
    ],
  },
]);
