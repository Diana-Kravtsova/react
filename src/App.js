import CardList from './components/CardList';
import './components/Header/Header.css';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect } from 'react';
import { fetchPokemon } from './store/pokemonSlice';
import { useDispatch } from 'react-redux';
import Pokemon from './pages/Pokemon';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
        children: [
            { path: '', element: <CardList /> },
            { path: 'signIn', element: <SignIn /> },
            { path: 'card/:id', element: <Pokemon/>},
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
