import { TbError404 } from 'react-icons/tb';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import { GiDeadHead } from 'react-icons/gi';

const NotFoundContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--main-color);
    padding-top: 20vh;

    .emoji {
        padding-top: 2em;
        width: 10em;
        height: 10em;
    }
`;

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 3000);
        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <>
            <div className={'loading-box'}>
                <BarLoader
                    color={'#007a7e'}
                    className={'loading-spinner'}
                    width={'100%'}
                />
            </div>
            <NotFoundContainer>
                <TbError404 className={'emoji'} />
                <h1>Oh no! Page not found. Redirecting to homepage...</h1>
                <GiDeadHead className={'emoji'}/>
            </NotFoundContainer>
        </>
    );
}

export default NotFound;
