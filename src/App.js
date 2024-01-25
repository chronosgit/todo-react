import { useState } from 'react';
import Container from './components/layout/container/Container';
import Header from "./components/layout/header/Header";
import Tasks from './components/layout/tasks/Tasks';
import Divider from './components/ui/divider/Divider';
import ButtonRounded from './components/ui/buttonRounded/ButtonRounded';
import TaskWriter from "./components/layout/taskWriter/TaskWriter";
import './App.css';

const App = () => {
	const addMessage = "+ New task";
	const closeMessage = "X Close";
	const [isModalOpened, setModalOpened] = useState(false);
	const [btnMessage, setBtnMessage] = useState(addMessage);
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		setTasks(prevTasks => {
			return [
				...prevTasks,
				task,
			]
		});
	}

	const toggleModal = () => {
		if(isModalOpened) {
			setBtnMessage(addMessage);
		} else {
			setBtnMessage(closeMessage)
		}

		setModalOpened(!isModalOpened);
	}

	const completeTask = (task) => {
		console.log(task)
	}

	const removeTask = (task) => {
		setTasks(prev => {
			return prev.filter(t => t.id !== task.id);
		});
	}

	return (
		<div className="App">
			<Container marginInline="auto" maxWidth="30rem">
				<Header />

				<Divider height={2} />

				<Container marginInline="auto" maxWidth="30rem" minHeight="15rem">
					{
						isModalOpened
						?
							<TaskWriter addTask={addTask} toggleModal={toggleModal} />
						:
							<Tasks 
								tasks={tasks}
								completeTask={completeTask} 
								removeTask={removeTask}
							/>
					}
				</Container>

				<ButtonRounded text={btnMessage} onClick={toggleModal} />
			</Container>
		</div>
	);
}

export default App;