import styles from "./addButton.module.css";

const AddButton = () => {
    return (
        <button className={styles.button}>
            + New task
        </button>
    )
}

export default AddButton;