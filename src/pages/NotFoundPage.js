import { TbError404 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { GiDeadHead } from 'react-icons/gi';

import commonStyles from '../styles/Common.module.css';
import Loader from '../components/Loader';

function NotFoundPage({ message }) {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 3000);
        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <>
            <Loader/>
            <div className={commonStyles.notFound}>
                <TbError404 className={commonStyles.emoji} />
                <h1>Oh no! {message ?? 'Page not found.'} Redirecting to homepage...</h1>
                <GiDeadHead className={commonStyles.emoji} />
            </div>
        </>
    );
}

export default NotFoundPage;
