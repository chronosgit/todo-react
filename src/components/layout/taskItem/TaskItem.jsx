import RadioButton from "../../ui/radioButton/RadioButton";
import Trashcan from "../../ui/trashcan/Trashcan";
import styles from "./taskItem.module.css";

const TaskItem = ({task, removeTask, completeTask}) => {

    return (
        <div className={styles.task} aria-label="task">
            <div className={styles.content} onClick={() => completeTask(task)}>
                <RadioButton />

                <p className={styles.title}>{task.text}</p>
            </div>

            <Trashcan onClick={() => removeTask(task)} />
        </div>
    )
}

export default TaskItem;