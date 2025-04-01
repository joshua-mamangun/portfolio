import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { lightTheme } from "../styles/theme";
import styled from "styled-components";

export default function ThemeToggleBtn () {
	const themeContext = useContext(ThemeContext);

	if (!themeContext) {
		throw new Error('Theme Toggle Button is not working');
	}

	return (
		<ThemeBtn 
			title={`Change to ${themeContext.theme === lightTheme ? 'Dark' : 'Light'} Theme`}
			onClick={themeContext.toggleTheme}
		>
			{themeContext.theme === lightTheme ? '☀️' : '🌙'}
		</ThemeBtn>
	);
};

const ThemeBtn = styled.button`
	padding: 0;
	background: none;
	height: 24px;
	border: none;
	color: ${props => props.theme.themeIconColor};
	user-select: none;

	&:hover,
	&:active,
	&:focus {
		cursor: pointer;
	}
`;