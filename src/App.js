import Container from './components/layout/container/Container';
import Header from "./components/layout/header/Header";
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Container>
				<Header />
			</Container>
		</div>
	);
}

export default App;