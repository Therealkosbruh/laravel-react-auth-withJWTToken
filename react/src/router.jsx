import {createBrowserRouter} from 'react-router-dom';
import Auth from './views/auth';
import Main from './views/Main';

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <Auth/>
    },
    {
        path: '/main',
        element: <Main/>
    },
    {
        path: '*',
        element: <Main/>
    },
])

export default router;