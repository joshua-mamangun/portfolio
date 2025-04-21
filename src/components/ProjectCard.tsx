import styled from "styled-components";
import Card, { OnMouseOrTouchEvent } from "./Card";
import breakpoints from "../styles/breakpoints";
import { ALIGN_TEXT_ON_SM, PROJECT_STYLE_TYPES_ON_SM, STYLE_TYPE_ON_SM, } from "../utils/constants";

export type ProjectStyleTypeOnSM = (typeof PROJECT_STYLE_TYPES_ON_SM)[number];

interface ProjectCardProps {
	data: {
		title: string;
		shortDesc: string;
		desc: string;
		techStacks: string[];
		links: {
			label: string;
			url: string;
			target?: string;
		}[];
		styleTypeOnSM?: ProjectStyleTypeOnSM;
		bgImg?: string;
	};
	onMouseEnter?: OnMouseOrTouchEvent;
	onMouseLeave?: OnMouseOrTouchEvent;
};

export default function ProjectCard ({ data, onMouseEnter, onMouseLeave } : ProjectCardProps) {
	return (
		<Card 
			data={{
				title: data.title,
				subTitle: data.shortDesc,
				styleTypeOnSM: data.styleTypeOnSM ?? STYLE_TYPE_ON_SM.TOP_IMG,
				alignTextOnSM: ALIGN_TEXT_ON_SM.LEFT,
				bgImg: data.bgImg
			}} 
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<ProjectContent>
				<ProjectDesc>
					{data.desc}
				</ProjectDesc>

				<LinksList>
					{data.links.map((link, key) => (
						<LinkItem
							key={key}
							href={link.url}
							target={link.target ?? '_blank'}
							rel="nofollow noreferrer noopener"
						>
							{link.label}
						</LinkItem>
					))}
				</LinksList>
			</ProjectContent>
		</Card>
	);
};

const ProjectContent = styled.div`
	text-align: left;
`;

const ProjectDesc = styled.p`
	display: none;
	margin: 0.5rem 0 0;

	@media (min-width: ${breakpoints.lg}) {
		margin: 2.5rem 0 0;
		display: block;
	}
`;

const LinksList = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.875rem;

	@media (min-width: ${breakpoints.lg}) {
		margin-top: 1.125rem;
		justify-content: space-between;
	}
`;

const LinkItem = styled.a`
	color: ${props => props.theme.subtleText};
	text-decoration: underline;

	&:hover,
	&:hover {
		color: ${props => props.theme.titleColor};
	}

	&:visited {
		color: ${props => props.theme.subtleText};
	}
`;