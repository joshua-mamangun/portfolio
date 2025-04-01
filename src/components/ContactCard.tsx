import styled from "styled-components";
import Card, { OnMouseOrTouchEvent } from "./Card";
import contactBg from "../assets/contact.jpg";
import { STYLE_TYPE_ON_SM } from "../utils/constants";

interface ContactCardProps {
	data: {
		title: string,
		subTitle: string,
		list: {
			type: string,
			value: string,
			url: string
		}[],
	},
	onMouseEnter?: OnMouseOrTouchEvent,
	onMouseLeave?: OnMouseOrTouchEvent,
};

export default function ContactCard ({ data, onMouseEnter, onMouseLeave } : ContactCardProps) {
	return (
		<Card 
			data={{
				title: data.title,
				subTitle: data.subTitle,
				bgImg: contactBg,
				styleTypeOnSM: STYLE_TYPE_ON_SM.DEFAULT,
			}}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<ContactList>
				{data.list.map((contact, key) => (
					<ContactItem key={key}>
						<ItemValue 
							href={contact.url}
							target="_blank"
							rel="nofollow noreferrer noopener"
						>
							{contact.value}
						</ItemValue>

						<ItemType>
							{contact.type}
						</ItemType>
					</ContactItem>
				))}
			</ContactList>
		</Card>
	);
};

const ContactList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	list-style-type: none;
	text-align: center;
	margin: 0;
	padding: 32px 0 0;
`;

const ContactItem = styled.li`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const ItemValue = styled.a`
	color: ${props => props.theme.text};
	font-weight: bold;

	&:visited,
	&:focus {
		color: ${props => props.theme.text};
	}

	&:hover {
		color: ${props => props.theme.titleColor};
	}
`;

const ItemType = styled.p`
	color: ${props => props.theme.subtleText};
	margin: 0;
`;