import { useCallback, useEffect, useRef, useState } from "react";
import { SCROLL_DISTANCE, STAY, TO_LEFT, TO_RIGHT } from "../utils/constants";

export default function useAutoScroll () {
	const cardListRef = useRef<HTMLDivElement | null>(null);
	const [centerPoint, setCenterPoint] = useState<number>(0); // Point where the card stops
	const [scroll, setScroll] = useState<number | undefined>(undefined); // Used for saving scrollInterval

	// Get centerPoint
	useEffect(() => {
		if (cardListRef) {
			const cardListWidth: number = (cardListRef.current?.clientWidth ?? 0) - (cardListRef.current?.offsetLeft ?? 0);
			const cardWidth: number = cardListRef.current?.children[0]?.clientWidth ?? 0;

			setCenterPoint((cardListWidth * .50) - (cardWidth / 2) + 40);
		}
	}, [cardListRef]);

	const handleAutoScroll = useCallback((event?: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
		const cardList = cardListRef?.current;

		if (cardList === null) {
			return;
		}

		let currentPos: number = (event?.currentTarget.offsetLeft ?? 0) - cardList.scrollLeft;
		let direction: string = STAY;

		if (currentPos < centerPoint) {
			direction = TO_LEFT;
		} else if (currentPos > centerPoint) {
			direction = TO_RIGHT;
		} else {
			return;
		}

		const scrollDistance = direction === TO_RIGHT ? SCROLL_DISTANCE : -SCROLL_DISTANCE;

		const scrollInterval = setInterval(() => {

			const tempScrollLeft = cardList.scrollLeft + scrollDistance;
			const tempCurrentPos = currentPos - scrollDistance;

			// If the currentPos meets the right edge of the list
			if (direction === TO_RIGHT && tempScrollLeft >= cardList.scrollWidth - cardList.clientWidth) {
				cardList.scrollLeft = cardList.scrollWidth - cardList.clientWidth;
				clearInterval(scrollInterval);

			// If it meets the left edge / starting point of the list
			} else if (direction === TO_LEFT && tempScrollLeft <= 0) {
				cardList.scrollLeft = 0;
				clearInterval(scrollInterval);
			
			// If it crosses the centerPoint when going right
			} else if (direction === TO_RIGHT && tempCurrentPos <= centerPoint) {
				cardList.scrollLeft = tempScrollLeft - (centerPoint - tempCurrentPos);
				clearInterval(scrollInterval);

			// If it crosses the centerPoint when going left
			} else if (direction === TO_LEFT && tempCurrentPos >= centerPoint ) {
				cardList.scrollLeft = tempScrollLeft + (tempCurrentPos - centerPoint);
				clearInterval(scrollInterval);
			
			// Continue to scroll
			} else {
				cardList.scrollLeft = tempScrollLeft;
				currentPos = tempCurrentPos;
			}
		}, 10);

		setScroll(scrollInterval);

		return () => {
			clearInterval(scrollInterval);
			setScroll(undefined);
		};
	}, [cardListRef, centerPoint]);

	const handleEndScroll = useCallback(() => {
		clearInterval(scroll);
		setScroll(undefined);
	}, [scroll]);

	return {
		cardListRef,
		handleAutoScroll,
		handleEndScroll
	};
};