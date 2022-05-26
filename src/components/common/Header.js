import { NavLink } from 'react-router-dom';

function Header(props) {
	const active = { color: '#ffccc6' };
	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/'>
						PORTFOLIO
					</NavLink>
				</h1>

				<ul id='gnb'>
					<li>
						<NavLink to='website' activeStyle={active}>
							WEBSITE
						</NavLink>
					</li>
					<li>
						<NavLink to='design' activeStyle={active}>
							DESIGN
						</NavLink>
					</li>
					<li>
						<NavLink to='apps' activeStyle={active}>
							APP
						</NavLink>
					</li>
					<li>
						<NavLink to='print' activeStyle={active}>
							PRINT
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
