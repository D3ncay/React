
import Posts from './../pages/Posts';
import { Navigate } from 'react-router-dom';
import Error from './../pages/Error';
import About from './../pages/About';
import PostIdPage from './../pages/PostIdPage';
import Login from './../pages/Login';

export const privateRoutes = [
    {
        path: 'posts',
        element: <Posts />
    },
    {
        path: 'posts/:postId',
        element: <PostIdPage />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'not-found',
        element: <Error />
    },
    {
        path: '*',
        element: <Navigate to="not-found" replace />
    },
]

export const publicRoutes = [
    {
        path: 'login',
        element: <Login/>
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: '*',
        element: <Navigate to="login" replace />
    },
]

