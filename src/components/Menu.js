function Menu({items}) {
	return (
		<div>
			{
				items.map((name, id) => (
					<li key={id}>
						{name}
					</li>
				))
			}
		</div>
	)
}

export default Menu;
