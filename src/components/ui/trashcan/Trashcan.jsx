import styles from "./trashcan.module.css";

const Trashcan = ({parentElement, onClick}) => {

    const onTrashcanClick = () => {
        onClick(parentElement);
    }

    return (
        <button className={styles.trashcan} onClick={onTrashcanClick}> 
            <img src="./assets/icons/trash.png" alt="trashcan" className={styles.image} />
        </button>
    )
}

export default Trashcan;