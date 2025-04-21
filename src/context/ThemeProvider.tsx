import { useState } from "react";
import { darkTheme, lightTheme, ThemeType } from "../styles/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
	children: React.ReactNode;
};

export default function ThemeProvider ({ children }: ThemeProviderProps) {

	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useState<ThemeType>(prefersDarkMode ? darkTheme : lightTheme);
	
	const toggleTheme = () => {
		setTheme(theme === lightTheme ? darkTheme : lightTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<StyledThemeProvider theme={theme}>
				{children}
			</StyledThemeProvider>
		</ThemeContext.Provider>
	);
};