import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Greet from "./Greet";
test("greet component renders correctly", () => {
	render(<Greet />);
	expect(
		screen.getByText("Welcome to testing application!")
	).toBeInTheDocument();
});

//here the requrement is greet component should render the name passsed as prop
//lets write the test first and then implement the component, as this is the TDD approach Test Driven Development

test("greet component renders the name passed as prop", () => {
	render(<Greet name="Komal"></Greet>);
	expect(
		screen.getByText("Welcome to testing application! Komal")
	).toBeInTheDocument();
});
//after writing the test, we will implement the component to pass this test
