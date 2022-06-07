import styled from "styled-components";
import { very_light_gray } from "../colors";

// const Card = (props) => {
// 	return (
// 		<CardBody {...props}>
// 			<Icon src={props.card.icon} alt='card_icon' />
// 			<H1>{props.card.title}</H1>
// 			<P>{props.card.text}</P>
// 			<Button color={props.card.color}>Learn More</Button>
// 		</CardBody>
// 	);
// };

const Card = ({ card }) => {
	const { icon, title, text, color } = card;

	return (
		<CardBody card={card}>
			<Icon src={icon} alt='card_icon' />
			<H1>{title}</H1>
			<P>{text}</P>
			<Button color={color}>Learn More</Button>
		</CardBody>
	);
};

export default Card;

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	height: 100%;
	padding: 50px;
	background: ${(props) => props.card.color};
	@media (max-width: 375px) {
		height: 440px;
	}
`;

const Icon = styled.img`
	background: transparent;
`;

const H1 = styled.h1`
	color: ${very_light_gray};
	font-size: 2.5rem;
	font-family: "Big Shoulders Display", cursive;
	text-transform: uppercase;
	background: transparent;
`;

const P = styled.p`
	font-family: "Lexend Deca", sans-serif;
	line-height: 25px;
	font-size: 15px;
	font-weight: 400;
	background: transparent;
	margin-bottom: 2.5rem;
	@media (max-width: 375px) {
		margin-bottom: 0;
	}
`;

const Button = styled.button`
	height: 50px;
	width: 145px;
	border-radius: 25px;
	border: none;
	outline: none;
	background-color: ${very_light_gray};
	font-weight: 700;
	font-size: 16px;
	color: ${(card) => card.color};
	&:hover {
		background-color: transparent;
		border: 2px solid ${very_light_gray};
		color: ${very_light_gray};
	}
`;
