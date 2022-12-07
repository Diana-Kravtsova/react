import Card from './Card';
import './Card.css'

function Cards({info, edit}) {
    return (
        <div className={'cards'}>
            {
                info.map(({id, caption, text}) => (
                    <Card
                        key={id}
                        caption={caption}
                        text={text}
                        edit={card => edit(id, card)}
                    />
                ))
            }
        </div>
    );
}

export default Cards;
