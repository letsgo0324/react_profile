//common
import Header from '../common/Header';

//main
import Visual from './Visual';
import Contact from './Contact';
import WorkSub from './WorkSub';
import Record from './Record';
import Skill from './Skill';
import About from './About';

function Main() {
	return (
		<main>
			<Header type={'main'} />
			<Visual />
			<Contact />
			<WorkSub />
			<Record />
			<Skill />
			<About />
		</main>
	);
}

export default Main;
