import styles from "./taskWriter.module.css";

const TaskWriter = ({addTask}) => {
    return (
        <div className={styles.modal}>
            <input type="text" placeholder="Your new task" className={styles.input} aria-label="task-name"/>

            <button className={styles.button}>Create</button>
        </div>
    )
};

export default TaskWriter;