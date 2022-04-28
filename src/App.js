import { Route, Switch } from 'react-router-dom';

import './scss/style.scss';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Main from './components/main/Main';

const path = process.env.PUBLIC_URL;

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
