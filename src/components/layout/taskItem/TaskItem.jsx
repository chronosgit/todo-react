import RadioButton from "../../ui/radioButton/RadioButton";
import Trashcan from "../../ui/trashcan/Trashcan";
import styles from "./taskItem.module.css";

const TaskItem = ({task, removeTask, completeTask}) => {

    const crossedTextStyle = {
        textDecorationLine: task.isCompleted ? "line-through" : "none",
        textDecorationColor: "red",
    }

    return (
        <div className={styles.task} aria-label="task">
            <div className={styles.content} onClick={() => completeTask(task)}>
                <RadioButton isFilled={task.isCompleted} />

                <p className={styles.title} style={crossedTextStyle}>{task.text}</p>
            </div>

            <Trashcan onClick={() => removeTask(task)} />
        </div>
    )
}

export default TaskItem;