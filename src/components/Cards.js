import Card from './Card';
import './Card.css'

function Cards({info, editCard, readonly}) {
    return (
        <div className={'cards'}>
            {
                info.map(({id, caption, text}) => (
                    <Card
                        key={id}
                        edit={card => editCard(id, card)}
                        {...{caption, text, readonly}}
                    />
                ))
            }
        </div>
    );
}

export default Cards;
