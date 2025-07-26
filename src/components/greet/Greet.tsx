import React from "react";

type props = {
	name?: string;
};
function Greet(props: props) {
	const { name = "" } = props;
	return (
		<div>
			<p>Welcome to testing application! {name}</p>
		</div>
	);
}

export default Greet;
