import Card from './Card/Card';
import './Card/Card.css';
import { BarLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { selectPokemonCount, handleEdit } from '../store/pokemonSlice';

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
            <div className={'loading-box'}>
                <BarLoader
                    color="#007a7e"
                    className={'loading-spinner'}
                    width={'100%'}
                />
            </div>
        );
    }

    if (status === 'failed') {
        return <h1 className={'noCards'}>{error}</h1>;
    }

    if (count <= 0) {
        return <h1 className={'noCards'}>All cards are gone...</h1>;
    }

    return (
        <div className={'cards'}>
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
