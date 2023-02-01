import '../pages/SignIn.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleEdit, selectPokemon } from '../store/pokemonSlice';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card/Card';

const Pokemon = () => {
    const { id } = useParams();
    const pokemon = useSelector(selectPokemon(id));
    const dispatch = useDispatch();

    return (
        <Card
            variant={'page'}
            card={pokemon}
            onEdit={card => dispatch(handleEdit(card))}
        />
    );
};

export default Pokemon;
