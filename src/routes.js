import CardList from './components/CardList';
import SignInPage from './pages/SignInPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import SettingsPage from './pages/SettingsPage';

const signInMessage = 'You are already logged in.';
const settingsMessage = 'Access denied.';

const routes = (type) => [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage />,
        children: [
            { path: '', element: <CardList /> },
            { path: 'signIn', element: type ? <NotFoundPage message={signInMessage} /> : <SignInPage /> },
            { path: 'card/:id', element: <PokemonPage /> },
            { path: 'settings', element: type === 'admin' ? <SettingsPage /> : <NotFoundPage message={settingsMessage} /> },
        ],
    },
];

export default routes;
