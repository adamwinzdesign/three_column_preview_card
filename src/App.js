import "./App.css";
import Main from "./components/Main";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import { card_data } from "./card_data";

function App() {
	return (
		<div className='App'>
			<Main role='main'>
				<CardContainer>
					{card_data.map((card) => (
						<Card role='contentinfo' key={card.title} card={card} />
					))}
				</CardContainer>
			</Main>
		</div>
	);
}

export default App;
