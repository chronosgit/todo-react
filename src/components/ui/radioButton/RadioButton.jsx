import styles from "./radioButton.module.css";

const RadioButton = ({isFilled}) => {

    const filledStyle = {
        backgroundColor: isFilled && "var(--clr-purple)",
    }

    return (
        <button className={styles.button} style={filledStyle} />
    )
}

export default RadioButton;