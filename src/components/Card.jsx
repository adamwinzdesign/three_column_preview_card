import styled from "styled-components";

const Card = ({ card }) => {
	return (
		<CardBody>
			<img src={card.icon} alt='card_icon' />
			<h1>{card.title}</h1>
			<p>{card.text}</p>
		</CardBody>
	);
};

export default Card;

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
