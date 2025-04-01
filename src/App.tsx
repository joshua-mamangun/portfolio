import { lazy, Suspense, useMemo, useState } from 'react';
import ThemeProvider from './context/ThemeProvider.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import styled, { keyframes } from 'styled-components';

export default function App () {

	const [loadingClass, setLoadingClass] = useState<string>('');

	const AppMain = useMemo(() => lazy(async() => {
		const module = await import('./AppMain.tsx');
		setLoadingClass('fadeOut');
		await new Promise(resolve => setTimeout(resolve, 500));
		return module;
	}), []);
 
	return (
		<ThemeProvider>
			<GlobalStyles />
			<Suspense fallback={<Loading className={loadingClass} />}>
				<AppMain />
			</Suspense>
		</ThemeProvider>
	);
};

const fadeIn = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1; }
`;

export const Loading = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: 1s ${fadeIn} ease-in;

	&:before {
		content: "Bringing ideas to life";
	}

	&.fadeOut {
		opacity: 0;
		transition: 1s all ease-out;
	}
`;