import RadioButton from "../../ui/radioButton/RadioButton";
import Trashcan from "../../ui/trashcan/Trashcan";
import styles from "./taskItem.module.css";

const TaskItem = ({task, removeTask, completeTask}) => {

    return (
        <div className={styles.task} aria-label="task">
            <div className={styles.content}>
                <RadioButton onClick={() => completeTask(task)} />

                <p className={styles.title}>{task.title}</p>
            </div>

            <Trashcan onClick={() => removeTask(task)} />
        </div>
    )
}

export default TaskItem;