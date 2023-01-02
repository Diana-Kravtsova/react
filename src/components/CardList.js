import Card from './Card/Card';
import './Card/Card.css'

function CardList({info, editCard, readonly, handleCheckbox}) {
    return (
        <div className={'cards'}>
            {
                info.map(({id, caption, text, checked}) => (
                    <Card
                        key={id}
                        edit={card => editCard(id, card)}
                        onCheck={newValue => handleCheckbox(id, newValue)}
                        {...{caption, text, checked, readonly}}
                    />
                ))
            }
        </div>
    );
}

export default CardList;
