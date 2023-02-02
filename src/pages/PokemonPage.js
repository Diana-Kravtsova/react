import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { handleEdit, selectPokemon } from '../store/pokemonSlice';
import { Card } from '../components/Card/Card';
import './Pages.module.css';

const PokemonPage = () => {
    const { id } = useParams();
    const pokemon = useSelector(selectPokemon(id));
    const dispatch = useDispatch();

    return (
        <Card
            variant="page"
            card={pokemon}
            onEdit={card => dispatch(handleEdit(card))}
        />
    );
};

export default PokemonPage;
