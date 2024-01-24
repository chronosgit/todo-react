import useSystemTheme from "../../../hooks/useSystemTheme";
import applyTheme from "../../../utils/applyTheme";
import styles from "./themeSwitch.module.css";

const ThemeSwitch = () => {
    const [theme, setTheme] = useSystemTheme();

    const toggleButton = () => {
        if(theme === "light") {
            setTheme("dark");
            applyTheme("dark");
        } else if(theme === "dark") {
            setTheme("light");
            applyTheme("light");
        } else {
            console.error("The theme state is corrupted");
        }
    }

    return (
        <button className={styles.themeSwitch} onClick={toggleButton}>
            <div className={styles.themeIcon} />
        </button>
    )
}

export default ThemeSwitch;