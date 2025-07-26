import React from "react";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greet from "./components/greet/Greet";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<h1>hello world</h1>
				<Greet />
			</div>
		</>
	);
}

export default App;
