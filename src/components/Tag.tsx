import styled from "styled-components"

interface TagProps {
	children: string;
};

export default function Tag ({ children } : TagProps) {
	return (
		<TagContainer>{children}</TagContainer>
	);
};

const TagContainer = styled.div`
	border-radius: 1.125rem;
	background: ${props => props.theme.subtleBg};
	color: ${props => props.theme.text};
	height: 2rem;
	font-size: 0.875rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0.9375rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;