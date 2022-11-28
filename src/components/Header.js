import "./Header.css"
import Menu from "./Menu";

function Header() {
	return (
		<div className={"header"}>
			<ul>
				<Menu items={[
					"header",
				]}/>
			</ul>
		</div>
	)
}

export default Header;
