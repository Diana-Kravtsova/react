import './Card.css'

function Card({id, caption, text}) {
	return (
		<div className={"card"} key={id}>
			<div className={"card-caption"}>{caption}</div>
			<hr/>
			<div className={"card-text"}>{text}</div>
		</div>
	);
}

export default Card;
