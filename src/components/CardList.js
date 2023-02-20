import { BarLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { BiMessageSquareError } from 'react-icons/bi';

import { selectPokemonCount, handleEdit } from '../store/pokemonSlice';
import Card from './Card/Card';
import cardStyles from './Card/Card.module.css';
import commonStyles from '../styles/Common.module.css';

function CardList() {
    const {
        info,
        status,
        error,
    } = useSelector(state => state.pokemon);

    const dispatch = useDispatch();
    const count = useSelector(selectPokemonCount);

    if (status === 'idle') {
        return null;
    }

    if (status === 'loading') {
        return (
            <div className={commonStyles.loadingBox}>
                <BarLoader
                    color="#007a7e"
                    className={commonStyles.loadingSpinner}
                    width={'100%'}
                />
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className={commonStyles.notFound}>
                <BiMessageSquareError className={commonStyles.emoji} />
                <h1>{error}</h1>
            </div>
        );
    }

    if (count <= 0) {
        return <h1 className={cardStyles.noCards}>All cards are gone...</h1>;
    }

    return (
        <div className={cardStyles.cards}>
            {
                info.map(card => (
                    <Card
                        key={card.id}
                        variant="card"
                        card={card}
                        onEdit={updateCard => dispatch(handleEdit(updateCard))}
                    />
                ))
            }
        </div>
    );
}

export default CardList;
