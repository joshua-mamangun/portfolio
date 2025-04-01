import { useEffect, useState } from "react";
import breakpoints from "../styles/breakpoints";

export default function useIsLargeScreen () {
	const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.innerWidth >= parseInt(breakpoints.lg));
	
	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= parseInt(breakpoints.lg));
		};
	
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isLargeScreen;
};