const applyTheme = (theme) => {

    const rootStyle = document.documentElement.style;

    if(theme === "light") {
        rootStyle.setProperty("--clr-main", "var(--clr-white)");
        rootStyle.setProperty("--clr-main-thin", "var(--clr-gray)");
        rootStyle.setProperty("--clr-bg", "var(--clr-purple)");
        rootStyle.setProperty("--clr-theme-icon", "var(--clr-yellow)");
        rootStyle.setProperty("--clr-theme-bg", "var(--clr-blue)");
        rootStyle.setProperty("--theme-icon-offset", "var(--theme-icon-light-offset)");
    } else {
        rootStyle.setProperty("--clr-main", "var(--clr-white)");
        rootStyle.setProperty("--clr-main-thin", "var(--clr-white)");
        rootStyle.setProperty("--clr-bg", "var(--clr-black)");
        rootStyle.setProperty("--clr-theme-icon", "var(--clr-white)");
        rootStyle.setProperty("--clr-theme-bg", "var(--clr-gray)");
        rootStyle.setProperty("--theme-icon-offset", "var(--theme-icon-dark-offset)");
    }
}

export default applyTheme;