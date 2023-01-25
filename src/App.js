import CardList from './components/CardList';
import './components/Header/Header.css';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
        children: [
            { path: '', element: <CardList /> },
            { path: 'signIn', element: <SignIn /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
