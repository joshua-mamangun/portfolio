import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import defaultBg from "../assets/work.jpg";
import breakpoints from "../styles/breakpoints";
import { ALIGN_TEXT_ON_SM, PROJECT_STYLE_TYPES_ON_SM, STYLE_TYPE_ON_SM } from "../utils/constants";
import { ProjectStyleTypeOnSM } from "./ProjectCard";
import usePrefersLargerText from "../hooks/usePrefersLargerText";

export type OnMouseOrTouchEvent = (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => void;

interface CardProps {
	data: {
		title: string;
		subTitle?: string;
		bgImg?: string;
		styleTypeOnSM?: STYLE_TYPE_ON_SM;
		alignTextOnSM?: ALIGN_TEXT_ON_SM;
		useAltTitleColor?: boolean;
	},
	children?: React.ReactNode;
	onMouseEnter?: OnMouseOrTouchEvent;
  	onMouseLeave?: OnMouseOrTouchEvent;
};

interface ContainerProps {
	$bgImg?: string;
	$contentHeight?: number;
};

interface TitleProps {
	$useAltTitleColor?: boolean;
};

export default function Card ({ data, children, onMouseEnter, onMouseLeave } : CardProps) {

	data.styleTypeOnSM ??= STYLE_TYPE_ON_SM.DEFAULT;
	data.alignTextOnSM ??= ALIGN_TEXT_ON_SM.CENTER;

	const cardRef = useRef<HTMLDivElement | null>(null);
	const [contentHeight, setContentHeight] = useState<number>(0);
	const prefersLargerText = usePrefersLargerText();

	const handleMouseEnter = useCallback((event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
		onMouseEnter?.(event);
	}, [onMouseEnter]);

	const handleMouseLeave = useCallback((event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
		onMouseLeave?.(event);
	}, [onMouseLeave]);

	useEffect(() => {
		if (cardRef) {
			setContentHeight(cardRef.current?.querySelector(CardContent)?.scrollHeight ?? 0);
		}
	}, [cardRef]);

	return (
		<Container
			ref={cardRef}
			$bgImg={data.bgImg ?? defaultBg}
			$contentHeight={contentHeight}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onTouchStart={handleMouseEnter} // For iPad Pro Touchscreen (1024px)
			onTouchEnd={handleMouseLeave} // For iPad Pro Touchscreen (1024px)
			className={data.styleTypeOnSM + ' ' + data.alignTextOnSM}
		>
			{PROJECT_STYLE_TYPES_ON_SM.includes(data.styleTypeOnSM as ProjectStyleTypeOnSM) && (
				<BgImage
					$bgImg={data.bgImg ?? defaultBg}
				/>
			)}

			<CardTitle $useAltTitleColor={data.useAltTitleColor}>{data.title}</CardTitle>
			<CardSubTitle>{data.subTitle}</CardSubTitle>

			<CardContent $prefersLargerText={prefersLargerText}>
				{children}
			</CardContent>
		</Container>
	);
};

const CardContent = styled.div<{ $prefersLargerText?: boolean }>`
	width: 100%;
	
	@media (min-width: ${breakpoints.lg}) {
		margin-top: 0;
		align-content: center;
		visibility: hidden;
		height: 0;
		transition: all .4s ease .2s;
		overflow-x: hidden;
		overflow-y: ${props => props.$prefersLargerText ? 'auto' : 'hidden'};
	}
`;

const Container = styled.section<ContainerProps>`
	position: relative;
	display: flex;
	flex-direction: column;
	border-radius: 1.25rem;
	box-sizing: border-box;
	line-height: 1.5;
	cursor: pointer;

	&.${STYLE_TYPE_ON_SM.DEFAULT} {
		padding: 1.5rem;
		background-image: url(${props => props.$bgImg});
		background-size: cover;
		background-position: center;
		background-color: ${props => props.theme.subtleBg};
		background-blend-mode: overlay;
	}

	&.${STYLE_TYPE_ON_SM.TOP_LEFT_IMG} {
		padding-right: 12%;
	}

	&.${STYLE_TYPE_ON_SM.TOP_RIGHT_IMG} {
		padding-left: 12%;
	}

	&.${ALIGN_TEXT_ON_SM.CENTER} {
		justify-content: center;
		align-items: center;
	}

	@media (min-width: ${breakpoints.sm}) {
		&.${STYLE_TYPE_ON_SM.NO_BG} {
			padding-right: 12%;
			padding-left: 12%;
		}
	}
	
	@media (min-width: ${breakpoints.lg}) {
		background-image: url(${props => props.$bgImg});
		background-size: cover;
		background-position: center;
		background-color: ${props => props.theme.subtleBg};
		background-blend-mode: overlay;

		justify-content: center;
		align-items: center;
		height: 30rem;
		min-width: 30rem;
		max-width: 30rem;
		height: 32.5rem;
		max-height: 100%;
		padding: 2.5rem !important;
		text-align: center;
		transition: all .4s ease;

		&:hover {
			min-width: 36.25rem;
			max-width: 36.25rem;
		}

		&:hover ${CardContent} {
			visibility: visible;
			height: ${props => props.$contentHeight + 'px'};
		}
	}
`;

const CardTitle = styled.h2<TitleProps>`
	font-size: 1.125rem;
	font-weight: bold;
	color: ${props => props.$useAltTitleColor ? props.theme.altTitleColor : props.theme.titleColor};
`;

const CardSubTitle = styled.p`
	margin: 0;
	font-size: 1rem;
	color: ${props => props.theme.text};
`;

const BgImage = styled.div<ContainerProps>`
	width: 100%;
	height: 25rem;
	border-radius: 1.25rem;
	margin-bottom: 1rem;
	box-sizing: border-box;
	background-image: url(${props => props.$bgImg });
	background-size: cover;
  	background-position: center;
	background-blend-mode: overlay;
	background-color: ${props => props.theme.subtleBg};

	@media (min-width: ${breakpoints.sm}) {
		height: 32.5rem;
	}

	@media (min-width: ${breakpoints.lg}) {
		display: none;
	}
`;