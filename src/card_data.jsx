import { bright_orange, dark_cyan, very_dark_cyan } from "./colors";
import Sedans from "./images/icon-sedans.svg";
import SUVS from "./images/icon-suvs.svg";
import Luxury from "./images/icon-luxury.svg";

export const card_data = [
	{
		icon: Sedans,
		title: "Sedans",
		text: "Choose a sedan for its affordability and excellent fuel economy.  Ideal for cruising in the city or on your next road trip.",
		color: bright_orange,
	},
	{
		icon: SUVS,
		title: "SUVS",
		text: "Take an SUV for its spacious interior, power, and versatility.  Perfect for your next family vacation nad off-road adventures.",
		color: dark_cyan,
	},
	{
		icon: Luxury,
		title: "Luxury",
		text: "Cruise in the best car brands without the bloated prices.  Enjoy the enhanced comfort of a luxury rental and arrive in style.",
		color: very_dark_cyan,
	},
];
