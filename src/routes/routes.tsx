import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard/Dashboard';
import Institutions from '../pages/Institutions/Institutions';
import Kpis from '../pages/Kpis/Kpis';
import Messages from '../pages/Messages/Messages';
import Profile from '../pages/Profile/Profile';
import SettingsAccount from '../pages/SettingsAccount/SettingsAccount';

const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/institutions',
          element: <Institutions />,
        },
        {
          path: '/kpis',
          element: <Kpis />,
        },
        {
          path: '/notifications',
          element: <Messages />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/settings-account',
          element: <SettingsAccount />,
        },
      ]
    }
  ])

  export default routes;