import { useState } from "react";
import getRandomId from "../../../utils/getRandomId";
import styles from "./taskWriter.module.css";

const TaskWriter = ({addTask, toggleModal}) => {
    const [task, setTask] = useState("");

    const taskOnChange = (e) => {
        setTask(e.target.value)
    }

    const createTask = () => {
        setTask("");

        const newId = getRandomId();
        const newTask = {
            id: newId,
            text: task,
            isCompleted: false,
        };

        addTask(newTask);
        toggleModal();
    }

    const inputOnKeyDown = (e) => {
        if(e.code === "Enter") {
            createTask();
        }
    }

    return (
        <div className={styles.modal}>
            <input 
                type="text"
                value={task} 
                placeholder="Your new task" 
                className={styles.input} 
                onChange={taskOnChange}
                onKeyDown={inputOnKeyDown}
                aria-label="task-name"
            />

            <button className={styles.button} onClick={createTask}>Create</button>
        </div>
    )
};

export default TaskWriter;