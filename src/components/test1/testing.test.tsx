//here writing test for Testing component

import { render, screen } from "@testing-library/react";
import Testing from "./Testing";

test("Testing component renders correctly", () => {
	render(<Testing />);
	expect(screen.getByText("Testing component works!")).toBeInTheDocument();
});

//here lets try describe() block to group tests for Testing component

describe("Testing Component Tests", () => {
	test("renders Testing component correctly", () => {
		render(<Testing />);
		expect(
			screen.getByText("Testing component works!")
		).toBeInTheDocument();
	});
	test("renders name and age props correctly", () => {
		render(<Testing name="John" age={30} />);
		expect(screen.getByText("Name: John, Age: 30")).toBeInTheDocument();
	});
});
