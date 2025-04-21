import styled from "styled-components";
import Card, { OnMouseOrTouchEvent } from "./Card";
import expBg from "../assets/exp.jpg";
import breakpoints from "../styles/breakpoints";
import { STYLE_TYPE_ON_SM } from "../utils/constants";

interface ExperienceCardProps {
	data: {
		title: string;
		subTitle: string;
		list: {
			position: string;
			company: string;
			dateStart: string;
			dateEnd: string;
			type: string;
			isTabbed?: boolean;
		}[];
	};
	onMouseEnter?: OnMouseOrTouchEvent;
	onMouseLeave?: OnMouseOrTouchEvent;
};

export default function ExperienceCard ({ data, onMouseEnter, onMouseLeave } : ExperienceCardProps) {
	return (
		<Card 
			data={{
				title: data.title,
				subTitle: data.subTitle,
				bgImg: expBg,
				styleTypeOnSM: STYLE_TYPE_ON_SM.NO_BG,
			}} 
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<ExperienceList>
				{data.list.map((exp, key) => (
					<ExperienceItem key={key}>
						<ItemDate>
							{exp.dateStart} - {exp.dateEnd}
						</ItemDate>

						<ItemPosition $isTabbed={exp.isTabbed}>
							{exp.position}
						</ItemPosition>

						<ItemCompany $isTabbed={exp.isTabbed}>
							{exp.company}
						</ItemCompany>
						<ItemDateStart>
							{exp.dateStart}
						</ItemDateStart>

						<ItemDateEnd>
							{exp.dateEnd}
						</ItemDateEnd>
					</ExperienceItem>
				))}
			</ExperienceList>
		</Card>
	);
};

const ExperienceList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	list-style-type: none;
	margin: 0;
	padding: 2rem 0.75rem 0;

	@media (min-width: ${breakpoints.sm}) {
		padding-right: 0;
		padding-left: 0;
	}
	
	@media (min-width: ${breakpoints.lg}) {
		padding-right: 0.75rem;
		padding-left: 0.75rem;
	}
`;

const ExperienceItem = styled.li`
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: auto auto;

	@media (min-width: ${breakpoints.lg}) {
		display: grid;
		grid-template-columns: auto auto;
	}
`;

const ItemPosition = styled.p<{ $isTabbed?: boolean }>`
	margin: 0;
	font-weight: bold;
	grid-column: 1;
	grid-row: 1;
	text-align: left;

	@media (min-width: ${breakpoints.lg}) {
		grid-column: 1;
		grid-row: 1;
	}
`;

const ItemCompany = styled.p<{ $isTabbed?: boolean }>`
	color: ${props => props.theme.subtleText};
	margin: 0;
	text-align: left;

	@media (min-width: ${breakpoints.lg}) {
		grid-column: 1;
		grid-row: 2;
	}
`;

const ItemDate = styled.p`
	display: none;
	margin: 0;
	font-size: 0.875rem;
	color: ${props => props.theme.subtleText};
	font-style: italic;

	@media (min-width: ${breakpoints.lg}) {
		display: none;
	}
`;

const ItemDateStart = styled.p`
	display: block;
	grid-column: 2;
	grid-row: 1;
	margin: 0;
	text-align: right;
	font-style: italic;
	color: ${props => props.theme.subtleText};
	font-size: 0.9375rem;

	@media (min-width: ${breakpoints.lg}) {
		display: block;
		grid-column: 2;
		grid-row: 1;
		margin: 0;
		text-align: right;
	}
`;

const ItemDateEnd = styled.p`
	display: block;
	grid-column: 2;
	grid-row: 2;
	margin: 0;
	text-align: right;
	font-style: italic;
	color: ${props => props.theme.subtleText};
	font-size: 0.9375rem;

	@media (min-width: ${breakpoints.lg}) {
		display: block;
		grid-column: 2;
		grid-row: 2;
		margin: 0;
		text-align: right;
	}
`;