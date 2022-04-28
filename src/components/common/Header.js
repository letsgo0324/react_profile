import { NavLink } from 'react-router-dom';

function Header(props) {
	const active = { color: 'red' };
	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/'>
						PORTFOLIO
					</NavLink>
				</h1>
			</div>
		</header>
	);
}

export default Header;
