import Container from './components/layout/container/Container';
import Header from "./components/layout/header/Header";
import Tasks from './components/layout/tasks/Tasks';
import Divider from './components/ui/divider/Divider';
import AddButton from './components/ui/addButton/AddButton';
import './App.css';

const App = () => {
	const tasks = [
		{
			id: 1,
			title: "Rstajfgsaka;wlgl",
			isChecked: true,
		},
		{
			id: 2,
			title: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
			isChecked: false,
		},
	];

	const addTask = (task) => {
		console.log(task);
	}

	const completeTask = (task) => {
		console.log(task)
	}

	const removeTask = (task) => {
		console.log(task);
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

				<AddButton />
			</Container>
		</div>
	);
}

export default App;