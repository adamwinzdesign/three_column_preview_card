import styled from "styled-components";
import { very_light_gray } from "../colors";

const Card = ({ card }) => {
	return (
		// <CardBody style={{ backgroundColor: card.color }}>
		// 	<Icon src={card.icon} alt='card_icon' />
		// 	<H1>{card.title}</H1>
		// 	<P>{card.text}</P>
		// 	<Button>Learn More</Button>
		// </CardBody>
		<CardBody>
			<Icon src={card.icon} alt='card_icon' />
			<H1>{card.title}</H1>
			<P>{card.text}</P>
			<Button>Learn More</Button>
		</CardBody>
	);
};

export default Card;

const CardBody = styled.div`
	background: ${(props) => props.color}
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	height: 100%;
	padding: 50px;
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
`;

// const Button = styled.button`
// 	height: 50px;
// 	width: 145px;
// 	border-radius: 25px;
// 	border: none;
// 	outline: none;
// 	background-color: ${very_light_gray};
// 	font-weight: 700;
// 	font-size: 16px;
// 	&:hover {
// 		background-color: transparent;
// 		border: 2px solid ${very_light_gray};
// 	}
// `;

// const Input = styled.input.attrs(props => ({
//   // we can define static props
//   type: "text",

//   // or we can define dynamic ones
//   size: props.size || "1em",
// }))`

const Button = styled.button`
	height: 50px;
	width: 145px;
	border-radius: 25px;
	border: none;
	outline: none;
	background-color: ${very_light_gray};
	font-weight: 700;
	font-size: 16px;
	color: ${(props) => props.color};
	&:hover {
		background-color: transparent;
		border: 2px solid ${very_light_gray};
	}
`;
