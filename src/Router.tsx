import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { CleaningSuppliesPage } from './pages/CleaningSupplies.page';
import { DetailersDepotPage } from './pages/DetailersDepot.page';
import { PartsPage } from './pages/Parts.page';
import { ToolsPage } from './pages/Tools.page';
import { AboutUsPage } from './pages/AboutUs.page';
import { FandIPage } from './pages/f_i.page';
import { LoginPage } from './pages/Login.page';
import { Header } from './components/Header/Header';
import { useMantineColorScheme } from '@mantine/core';
import { Footer } from './components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  },
  {
    path: '/cleaning',
    element: 
    <>
      <Header />
      <CleaningSuppliesPage />
      <Footer />
    </>
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/detailers',
    element: 
    <>
      <Header />
      <DetailersDepotPage />
      <Footer />
    </>,
  },
  {
    path: '/f_and_i',
    element: 
    <>
      <Header />
      <FandIPage />
      <Footer />
    </>,
  },
  {
    path: '/parts',
    element: 
    <>
      <Header />
      <PartsPage />
      <Footer />
    </>,
  },
  {
    path: '/tools',
    element: 
    <>
      <Header />
      <ToolsPage />
      <Footer />
    </>,
  },
  {
    path: '/about',
    element: 
    <>
      <Header />
      <AboutUsPage />
      <Footer />
    </>,
  },
]);

export function Router() {
  const { setColorScheme } = useMantineColorScheme();
  setColorScheme('dark');
  
  return <RouterProvider router={router} />;
}
