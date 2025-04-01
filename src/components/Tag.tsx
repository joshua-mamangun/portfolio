import styled from "styled-components"

interface TagProps {
	children: string,
};

export default function Tag ({ children } : TagProps) {
	return (
		<TagContainer>{children}</TagContainer>
	);
};

const TagContainer = styled.div`
	border-radius: 18px;
	background: ${props => props.theme.subtleBg};
	color: ${props => props.theme.text};
	height: 32px;
	font-size: 0.875rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 15px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;