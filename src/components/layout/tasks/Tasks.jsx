import TaskItem from "../taskItem/TaskItem";
import styles from "./tasks.module.css";

const Tasks = ({tasks, completeTask, removeTask}) => {
    const doTasksExist = (tasks && tasks.length > 0);

    return (
        <div className={styles.tasks} aria-label="tasks">
            {
                doTasksExist
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