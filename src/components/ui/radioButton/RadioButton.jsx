import styles from "./radioButton.module.css";

const RadioButton = ({onClick}) => {

    return (
        <button className={styles.button} onClick={onClick}/>
    )
}

export default RadioButton;