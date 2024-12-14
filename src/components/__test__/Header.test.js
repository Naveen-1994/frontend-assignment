import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../Header";

describe("Header", () => {
    it("should render header with title text", () => {
        render(<Header />)
        const headerTitle = screen.getByText("StakeHolders")
        expect(headerTitle).toBeInTheDocument();
    })
})