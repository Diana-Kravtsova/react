import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

const CardList = lazy(() => import('./components/CardList'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const PokemonPage = lazy(() => import('./pages/PokemonPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));

const signInMessage = 'You are already logged in.';
const settingsMessage = 'Access denied.';

const routes = (type) => [
    {
        path: '/',
        element: <Suspense fallback={<Loader />}> <HomePage /></Suspense>,
        errorElement: <NotFoundPage />,
        children: [
            { path: '', element: <CardList /> },
            { path: 'signIn', element: type ? <NotFoundPage message={signInMessage} /> : <SignInPage /> },
            { path: 'card/:id', element: <PokemonPage /> },
            {
                path: 'settings',
                element: type === 'admin' ? <SettingsPage /> : <NotFoundPage message={settingsMessage} />,
            },
        ],
    },
];

export default routes;
