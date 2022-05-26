import { Route, Switch } from 'react-router-dom';

import './scss/style.scss';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Main from './components/main/Main';

//sub
import Website from './components/sub/Website';
import Design from './components/sub/Design';
import Apps from './components/sub/Apps';
import Print from './components/sub/Print';

const path = process.env.PUBLIC_URL;

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>

				<Route path='/'>
					<Header type={'sub'} path={path} />
				</Route>
			</Switch>

			<Route path='/website' component={Website} />
			<Route path='/design' component={Design} />
			<Route path='/apps' component={Apps} />
			<Route path='/print' component={Print} />

			<Footer />
		</>
	);
}

export default App;
