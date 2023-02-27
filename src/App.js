import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { fetchPokemon } from './store/pokemonSlice';
import routes from './routes';

function App() {
    const { type } = useSelector(state => state.auth);
    const routing = createBrowserRouter(routes(type));
    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchPokemon());});

    return (
        <RouterProvider router={routing} />
    );
}

export default App;
