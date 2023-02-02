import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { fetchPokemon } from './store/pokemonSlice';
import CardList from './components/CardList';
import SignInPage from './pages/SignInPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage />,
        children: [
            { path: '', element: <CardList /> },
            { path: 'signIn', element: <SignInPage /> },
            { path: 'card/:id', element: <PokemonPage/>},
        ],
    },
]);

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPokemon())
    });

    return (
        <RouterProvider router={router} />
    );
}

export default App;
