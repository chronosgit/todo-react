import ThemeSwitch from "../../ui/themeSwitch/ThemeSwitch";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>todo.</h1>

            <ThemeSwitch />
        </header>
    )
};

export default Header;