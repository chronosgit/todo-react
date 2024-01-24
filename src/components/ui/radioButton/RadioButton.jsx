import styles from "./radioButton.module.css";

const RadioButton = ({parentElement, onClick}) => {

    const onButtonClick = () => {
        onClick(parentElement);
    }

    return (
        <button className={styles.button} onClick={onButtonClick}/>
    )
}

export default RadioButton;