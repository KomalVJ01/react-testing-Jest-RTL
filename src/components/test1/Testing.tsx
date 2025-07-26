import React from "react";

type Props = { name?: string; age?: number };
function Testing(Props: Props) {
	const { name = "Guest", age = 0 } = Props;
	return (
		<div>
			<p> Testing component works!</p>
			<p>{`Name: ${name}, Age: ${age}`}</p>
		</div>
	);
}

export default Testing;
