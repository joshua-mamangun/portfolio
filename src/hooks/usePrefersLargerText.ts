import { useEffect, useState } from "react";

export default function usePrefersLargerText () {
	const [prefersLargerText, setPrefersLargerText] = useState<boolean>(false);

	useEffect(() => {
		const checkFontSizePreference = () => {
			const currentFontSize: number = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
			const baseFontSize: number = 16;

			setPrefersLargerText(currentFontSize > baseFontSize);
		};

		checkFontSizePreference();

		window.addEventListener('resize', checkFontSizePreference);

		return () => window.removeEventListener('resize', checkFontSizePreference);
	}, []);

	return prefersLargerText;
};