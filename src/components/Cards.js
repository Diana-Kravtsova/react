import Card from './Card';
import './Card.css'

function Cards({info}) {
    return (
        <div className={'cards'}>
            {
                info.map(({id, caption, text}) =>
                    (<Card
                        key={id}
                        caption={caption}
                        text={text}
                    />))
            }
        </div>
    );
}

export default Cards;
