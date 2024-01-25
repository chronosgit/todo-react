import styles from "./container.module.css";

const Container = ({
    children, 
    maxWidth = "100%", 
    minHeight = "0",
    marginInline = "none",
}) => {
    
    const controlledStyles = {
        maxWidth: maxWidth,
        minHeight: minHeight,
        marginInline: marginInline,
    }

    return (
        <div className={styles.container} style={controlledStyles}>
            {children}
        </div>
    )
};

export default Container;