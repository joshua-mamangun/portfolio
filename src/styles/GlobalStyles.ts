import { createGlobalStyle } from "styled-components";
import breakpoints from "./breakpoints";

export default createGlobalStyle`
	/* Additional Preflight */
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		/* Additional Preflight */
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;

		/* Custom Default Style */
		background: ${props => props.theme.body};
		color: ${props => props.theme.text};
		font-family: Poppins, sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;

		@media (min-width: ${breakpoints.lg}) {
			overflow: hidden;
		}
	}
	
	/* Scrollbar */
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.scrollThumb};
		border-radius: 8px;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: ${props => props.theme.scrollThumbHover};
	}

	::-webkit-scrollbar-track {
		background-color: ${props => props.theme.scrollBg};
		border-radius: 8px;
	}
`