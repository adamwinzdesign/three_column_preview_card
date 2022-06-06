import styled from "styled-components";
import { transparent_white } from "../colors";

const CardContainer = styled.div`
	height: 500px;
	width: 920px;
	border-radius: 7px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${transparent_white};
	overflow: hidden;
`;

export default CardContainer;
