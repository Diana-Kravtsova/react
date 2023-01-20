function Menu({ items }) {
    return (
        <ul>
            {
                items.map((name, id) => (
                    <li key={id}>
                        {name}
                    </li>
                ))
            }
        </ul>
    );
}

export default Menu;
