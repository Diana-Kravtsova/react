import Card from "./Card";
import './Card.css'

function Cards({info}) {
	return (
		<div className={"cards"}>
			{
				info.map(({id, caption, text}) =>
					(<Card
						id={id}
						caption={caption}
						text={text}
					/>))
			}
		</div>
	);
}

export default Cards;
