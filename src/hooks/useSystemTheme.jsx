import { useState, useEffect } from "react";

const useSystemTheme = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const mq = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
      
        if(mq.matches) {
            setTheme("dark");
        }
        
        const mqEventListener = mq.addEventListener("change", (e) => {
            if(e.matches) {
                setTheme("dark");
            } else {
                setTheme("light");
            }
        });

        return () => {
            mq.removeEventListener("change", mqEventListener);
        }
    }, [theme]);

    return [theme, setTheme];
}

export default useSystemTheme;