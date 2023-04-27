import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';

function HomePage() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

export default HomePage;
