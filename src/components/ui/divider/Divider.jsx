import styles from "./divider.module.css";

// Component for empty space
const Divider = ({height = 1}) => {
    const propsStyles = {
        height: `${height}rem`,
    }
    return (
        <div className={styles.divider} style={propsStyles} />
    )
};

export default Divider;