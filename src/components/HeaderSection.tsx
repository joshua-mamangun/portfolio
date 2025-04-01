import styled from "styled-components";
import ThemeToggleBtn from "./ThemeToggleBtn";
import Tag from "./Tag";
import breakpoints from "../styles/breakpoints";
import usePrefersLargerText from "../hooks/usePrefersLargerText";

interface HeaderSectionProps {
	data: {
		name: string,
		position: string,
		desc: string,
		techStacks: string[],
	},
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
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media (min-width: ${breakpoints.lg}) {
		width: 100%;
		padding: 0 40px;
		flex-direction: row;
		align-items: flex-start;
		gap: 40px;
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
	gap: 4px;
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
	margin: 8px 0 0;
	line-height: 1.5;

	@media (min-width: ${breakpoints.lg}) {
		margin-top: 10px;
	}
`;

const TechStacksList = styled.ul<{ $prefersLargerText?: boolean }>`
	list-style-type: none;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 8px;
	padding: 0;
	margin: 12px 0 0;

	@media (min-width: ${breakpoints.lg}) {
		flex-wrap: ${props => props.$prefersLargerText ? 'wrap' : 'nowrap'};
		gap: 10px;
		margin-top: 10px;
		overflow: hidden;
	}
`;

const TechStackItem = styled.li`
`;