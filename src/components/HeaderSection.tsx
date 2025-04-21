import styled from "styled-components";
import ThemeToggleBtn from "./ThemeToggleBtn";
import Tag from "./Tag";
import breakpoints from "../styles/breakpoints";
import usePrefersLargerText from "../hooks/usePrefersLargerText";

interface HeaderSectionProps {
	data: {
		name: string;
		position: string;
		desc: string;
		techStacks: string[];
	};
};

export default function HeaderSection ({ data } : HeaderSectionProps) {

	const prefersLargerText = usePrefersLargerText();

	return (
		<Container>
			<Name>{data.name}</Name>
		
			<IntroSection>
				<Position>
					<PositionTitle>{data.position}</PositionTitle>
					<ThemeToggleBtn />
				</Position>

				<Description>{data.desc}</Description>

				<TechStacksList $prefersLargerText={prefersLargerText}>
					{data.techStacks.map((stack, key) => (
						<TechStackItem key={key}>
							<Tag>{stack}</Tag>
						</TechStackItem>
					))}
				</TechStacksList>
			</IntroSection>
		</Container>
	);
};

const Container = styled.section`
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	@media (min-width: ${breakpoints.lg}) {
		width: 100%;
		padding: 0 2.5rem;
		flex-direction: row;
		align-items: flex-start;
		gap: 2.5rem;
		justify-content: space-between;
		align-items: center;
	}
`;

const Name = styled.h1`
	font-size: 2.5rem;
	font-weight: bold;
	color: ${props => props.theme.text};
	margin: 0;
	line-height: 1.15;
	white-space: wrap;
	overflow: hidden;
	text-overflow: ellipsis;

	@media (min-width: ${breakpoints.lg}) {
		font-size: 4.625rem;
		min-width: 50%;
	}
`;

const IntroSection = styled.div`
	overflow: hidden;
`;

const Position = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.25rem;
	align-items: center;
`;

const PositionTitle = styled.p`
	font-size: 1rem;
	font-weight: bold;
	margin: 0;
`;

const Description = styled.p`
	font-size: 1rem;
	color: ${props => props.theme.subtleText};
	margin: 0.5rem 0 0;
	line-height: 1.5;

	@media (min-width: ${breakpoints.lg}) {
		margin-top: 0.625rem;
	}
`;

const TechStacksList = styled.ul<{ $prefersLargerText?: boolean }>`
	list-style-type: none;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.5rem;
	padding: 0;
	margin: 0.75rem 0 0;

	@media (min-width: ${breakpoints.lg}) {
		flex-wrap: ${props => props.$prefersLargerText ? 'wrap' : 'nowrap'};
		gap: 0.625rem;
		margin-top: 0.625rem;
		overflow: hidden;
	}
`;

const TechStackItem = styled.li`
`;