import HeaderSection from "./components/HeaderSection";
import styled from "styled-components";
import { PROJECT_STYLE_TYPES_ON_SM, STYLE_TYPE_ON_SM } from "./utils/constants";
import Card from "./components/Card";
import breakpoints from "./styles/breakpoints";
import ContactCard from "./components/ContactCard";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard, { ProjectStyleTypeOnSM } from "./components/ProjectCard";
import useIsLargeScreen from "./hooks/useIsLargeScreen";
import useAutoScroll from "./hooks/useAutoScroll";

const data = {
	header: {
		name: 'JOSHUA MAMANGUN',
		position: 'FRONTEND WEB DEVELOPER',
		desc: 'Bringing any design to life, whether simple or complex, to create seamless and interactive experiences.',
		techStacks: ['React', 'TypeScript', 'SCSS', 'Zustand', 'Jest'],
	},
	contact: {
		title: 'Work Together',
		subTitle: 'Let\'s turn designs into reality',
		list: [
			{ type: 'Email', value: 'mamangunjoshua@gmail.com', url: 'mailto:mamangunjoshua@gmail.com' },
			{ type: 'Linkedin', value: 'Joshua Mamangun', url: 'https://www.linkedin.com/in/joshua-mamangun' },
			{ type: 'Github', value: 'joshua-mamangun', url: 'https://github.com/joshua-mamangun' },
		],
	},
	experience: {
		title: 'Experience',
		subTitle: '3+ years of frontend development',
		list: [
			{
				position: 'Front End Developer',
				company: 'WeSupport Incorporated',
				dateStart: 'Nov 2024',
				dateEnd: 'Nov 2025',
				type: 'Contract',
			},
			{
				position: 'Applications Developer',
				company: 'TechEdge Solutions Inc.',
				dateStart: 'Apr 2023',
				dateEnd: 'Nov 2023',
				type: 'Full-time',
			},
			{
				position: 'Junior Consultant',
				company: 'TechEdge Solutions Inc.',
				dateStart: 'Dec 2021',
				dateEnd: 'Apr 2023',
				type: 'Full-time',
				isTabbed: true,
			},
			{
				position: 'Full-stack Web Developer',
				company: 'City of Malabon University',
				dateStart: 'Feb 2021',
				dateEnd: 'Dec 2021',
				type: 'Contract',
			},
		],
	},
	works: {
		title: 'Personal Projects',
		subTitle: 'A showcase of my works',
		list: [
			{
				title: 'Marketing Site #1',
				shortDesc: 'A sample marketing site featuring five distinct scroll animations',
				desc: 'This project includes five sections with distinct scroll animations: (1) Gallery-style Hero Scroll, (2) Highlight Character on Scroll, (3) Feature Showcase on Scroll, (4) Auto Horizontal Scrolling, and (5) Appearing Message Animation. Concept inspired by various sites.',
				techStacks: ['React', 'Vite', 'TypeScript', 'Tailwind'],
				links: [
					{ label: 'Visit Site', url: 'https://joshua-mamangun.github.io/marketing-1/' },
					{ label: 'View Code', url: 'https://github.com/joshua-mamangun/marketing-1-vite-ts-tailwind' },
				],
			},
			{
				title: 'Marketing Site #2',
				shortDesc: 'Featuring five sections with various animations and two cursor effects (Working In Progress)',
				desc: 'This project includes: (1) Negative Circle Cursor with Small Image Transition, (2) Auto-Rotating Images Ring on Scroll, (3) Circular Rotation Effect on Scroll, (4) Dynamic Image/Section Reveal, and (5) Cursor Image Color Change. Concept inspired by various sites.',
				techStacks: ['React', 'Next.JS', 'TypeScript', 'SCSS'],
				links: [],
			},
		]
	},
};

export default function AppMain () {

	const isLargeScreen = useIsLargeScreen();
	const {cardListRef, handleAutoScroll, handleEndScroll} = useAutoScroll();

	return (
		<Main>
			<HeaderSection data={data.header} />
			
			<CardsList ref={cardListRef}>
				
				<ContactCard 
					data={data.contact}
					{...(isLargeScreen && {
						onMouseEnter: handleAutoScroll,
						onMouseLeave: handleEndScroll
					})}
				/>

				<ExperienceCard
					data={data.experience}
					{...(isLargeScreen && {
						onMouseEnter: handleAutoScroll,
						onMouseLeave: handleEndScroll
					})}
				/>
				
				<Divider />

				<Card
					data={{
						title: data.works.title,
						subTitle: data.works.subTitle + (isLargeScreen ? ', displayed on the right' : ''),
						styleTypeOnSM: STYLE_TYPE_ON_SM.NO_BG,
						useAltTitleColor: true,
					}} 
					{...(isLargeScreen && {
						onMouseEnter: handleAutoScroll,
						onMouseLeave: handleEndScroll
					})}
				/>

				{/* Works */}
				{data.works.list.map((work, key) => (
					<ProjectCard 
						key={key}
						data={{
							title: work.title,
							shortDesc: work.shortDesc,
							desc: work.desc,
							techStacks: work.techStacks,
							links: work.links,
							styleTypeOnSM: PROJECT_STYLE_TYPES_ON_SM[key % 3] as ProjectStyleTypeOnSM,
						}} 
						{...(isLargeScreen && {
							onMouseEnter: handleAutoScroll,
							onMouseLeave: handleEndScroll
						})}
					/>
				))}
				
			</CardsList>
		</Main>
	);
};

const Main = styled.main`
	position: relative;
	overflow: hidden;
	max-width: 100vw;

	@media (min-width: ${breakpoints.sm}) {
		padding: 20px;
	}
	
	@media (min-width: ${breakpoints.lg}) {
		width: 100vw;
		max-width: 1280px;
		padding: 40px 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const CardsList = styled.section`
	width: 100%;
	box-sizing: border-box;
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 36px;
	padding: 8px 24px 36px;

	@media (min-width: ${breakpoints.lg}) {
		padding: 40px 40px 20px;
		flex-direction: row;
		flex-wrap: nowrap;
		overflow: hidden;
		box-sizing: border-box;
		gap: 30px;
		max-width: 1280px;
		transition: all .4s ease;
	}
`;

const Divider = styled.hr`
	color: ${props => props.theme.dividerColor};

	@media (min-width: ${breakpoints.lg}) {
		display: none;
	}
`;