import styles from "./buttonRounded.module.css";

const ButtonRounded = ({text, onClick}) => {

    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonRounded;