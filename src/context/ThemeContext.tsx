import { createContext } from "react";
import{ DefaultTheme } from "styled-components";
import { lightTheme } from "../styles/theme";

interface ThemeContextType {
	theme: 	DefaultTheme;
	toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
	theme: lightTheme,
	toggleTheme: () => {},
});