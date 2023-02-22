import { TbError404 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import { GiDeadHead } from 'react-icons/gi';

import commonStyles from '../styles/Common.module.css';

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
            <div className={commonStyles.loadingBox}>
                <BarLoader
                    color={'#007a7e'}
                    className={commonStyles.loadingSpinner}
                    width={'100%'}
                />
            </div>
            <div className={commonStyles.notFound}>
                <TbError404 className={commonStyles.emoji} />
                <h1>Oh no! {message ?? 'Page not found.'} Redirecting to homepage...</h1>
                <GiDeadHead className={commonStyles.emoji} />
            </div>
        </>
    );
}

export default NotFoundPage;
