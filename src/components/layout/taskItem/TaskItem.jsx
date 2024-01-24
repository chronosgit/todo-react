import RadioButton from "../../ui/radioButton/RadioButton";
import Trashcan from "../../ui/trashcan/Trashcan";
import styles from "./taskItem.module.css";

const TaskItem = ({task, removeTask, completeTask}) => {
    return (
        <div className={styles.task} aria-label="task">
            <div className={styles.content}>
                <RadioButton parentElement={task} onClick={completeTask} />

                <p className={styles.title}>{task.title}</p>
            </div>

            <Trashcan parentElement={task} onClick={removeTask} />
        </div>
    )
}

export default TaskItem;