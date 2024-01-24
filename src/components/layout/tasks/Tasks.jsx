import TaskItem from "../taskItem/TaskItem";
import styles from "./tasks.module.css";

const Tasks = ({tasks, addTask, completeTask, removeTask}) => {
    return (
        <div className={styles.tasks} aria-label="tasks">
            {
                tasks
                ?
                    tasks.map((task, i) => {
                        return (
                            <TaskItem 
                                key={task.id} 
                                task={task} 
                                completeTask={completeTask}
                                removeTask={removeTask}
                            />
                        )
                    })
                :
                    <p className={styles.message}>No tasks</p>
            }
        </div>
    )
}

export default Tasks;