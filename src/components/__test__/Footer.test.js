import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from "../Footer";

describe("Header", () => {
    it("should render footer with title text", () => {
        render(<Footer />)
        const headerTitle = screen.getByText("@2024")
        expect(headerTitle).toBeInTheDocument();
    })
})