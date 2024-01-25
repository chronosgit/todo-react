import styles from "./addButton.module.css";

const AddButton = () => {

    const openModal = () => {
        
    }

    return (
        <button className={styles.button} onClick={openModal}>
            + New task
        </button>
    )
}

export default AddButton;