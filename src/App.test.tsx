import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

//As we are using Jest as the test runner, we don't need to import it explicitly.
//✅ test(), expect(), are global functions — no import needed.
test("renders hello world", () => {
	render(<App />);
	expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
