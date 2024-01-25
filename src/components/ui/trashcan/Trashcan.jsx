import styles from "./trashcan.module.css";

const Trashcan = ({onClick}) => {

    return (
        <button className={styles.trashcan} onClick={onClick}> 
            <img src="./assets/icons/trash.png" alt="trashcan" className={styles.image} />
        </button>
    )
}

export default Trashcan;