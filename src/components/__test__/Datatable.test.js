import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Datatable from "../Datatable";

import data from "../../../frontend-assignment.json"

describe("Data table", () => {
    it("should contain 2 paginantion buttons", () => {
        render(<Datatable fundData={data} />)
        const paginationBtns = screen.getAllByRole("button")
        expect(paginationBtns).toHaveLength(2)
    })
    it("should render a table with 5 rows on load", () => {
        render(<Datatable fundData={data} />)
        const tableRows = screen.getAllByTestId("tableDataRow")
        expect(tableRows).toHaveLength(5)
    })
    it("should goto 2nd page when clicked on next page button", () => {
        render(<Datatable fundData={data} />)
        const nextButton = screen.getByTestId("nextBtn")
        fireEvent.click(nextButton)
        const nextScreenText = screen.getByText("5")
        expect(nextScreenText).toBeTruthy();
    })
    it("should goto first page after moved to 2nd page", () => {
        render(<Datatable fundData={data} />)
        const nextButton = screen.getByTestId("nextBtn")
        fireEvent.click(nextButton)
        const prevButton = screen.getByTestId("prevBtn")
        fireEvent.click(prevButton)
        const prevScreenText = screen.getByText("0")
        expect(prevScreenText).toBeTruthy();
    })
})