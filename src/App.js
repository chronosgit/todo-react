import Container from './components/layout/container/Container';
import Header from "./components/layout/header/Header";
import Tasks from './components/layout/tasks/Tasks';
import Divider from './components/ui/divider/Divider';
import './App.css';

const App = () => {
	const tasks = [
		{
			id: 1,
			title: "Rstajfgsaka;wlgl",
			isChecked: false,
		},
		{
			id: 2,
			title: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
			isChecked: false,
		},
	];

	const addTask = (task) => {
		console.log(`new task: ${task}`);
	}

	const completeTask = (task) => {
		console.log(`completed task: ${task}`);
	}

	const removeTask = (task) => {
		console.log(`removed task: ${task}`);
	}

	return (
		<div className="App">
			<Container>
				<Header />

				<Divider height={2} />

				<Tasks 
					tasks={tasks}
					completeTask={completeTask} 
					removeTask={removeTask}
				/>
			</Container>
		</div>
	);
}

export default App;