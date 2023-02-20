import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { fetchPokemon } from './store/pokemonSlice';
import CardList from './components/CardList';
import SignInPage from './pages/SignInPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import SettingsPage from './pages/SettingsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage />,
        children: [
            { path: '', element: <CardList /> },
            { path: 'signIn', element: <SignInPage /> },
            { path: 'card/:id', element: <PokemonPage /> },
            { path: 'settings', element: <SettingsPage /> },
        ],
    },
]);

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokemon());
    });

    return (
        <RouterProvider router={router} />
    );
}

export default App;
