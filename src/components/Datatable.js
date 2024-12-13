import { useState } from "react";

const Datatable = ({ fundData }) => {

    const [tableData, setTableData] = useState(fundData.slice(0, 5));
    const [pageNumber, setPageNumber] = useState(1);

    // 1 0, 5
    // 2 5, 10
    // 3 10, 15

    // 94 95

    /* length: 14 
    divident: 2, reminder: 4
    last index 15
    */

    const handleNextClick = (pageCount) => {
        let firstIndex = pageNumber * 5;
        let lastIndex = (pageNumber + 1) * 5;
        if (lastIndex < fundData.length) {
            setTableData(fundData.slice(firstIndex, lastIndex))
        }
        if (lastIndex > fundData.length) {
            setTableData(fundData.slice(firstIndex))
        }
        setPageNumber(pageNumber + 1)
    }

    const handlePrevClick = () => {
        let firstIndex = (pageNumber - 2) * 5;
        let lastIndex = (pageNumber - 1) * 5;
        setTableData(fundData.slice(firstIndex, lastIndex))
        setPageNumber(pageNumber - 1)
    }
    return (
        <div className="page-container">
            <div className="table-container">
                <table className="table-block">
                    <thead className="table-header-block">
                        <tr>
                            <th className="table-header">S.No</th>
                            <th className="table-header">Percentage funded</th>
                            <th className="table-header">Amount pledged</th>
                        </tr>
                    </thead>
                    <tbody className="table-body-block">
                        {
                            tableData.map((fund) => {
                                return (
                                    <tr key={fund["s.no"]}>
                                        <td className="table-cell-content">{fund["s.no"]}</td>
                                        <td className="table-cell-content">{fund["amt.pledged"]}</td>
                                        <td className="table-cell-content">{fund["percentage.funded"]}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="button-block">
                    <button
                        className="prev-button table-cta"
                        id={tableData[0]["s.no"] === fundData[0]["s.no"] ? `disabled` : ""}
                        disabled={tableData[0]["s.no"] === fundData[0]["s.no"] ? true : false}
                        onClick={handlePrevClick}>prev</button>
                    <button
                        className="next-button table-cta"
                        id={tableData[tableData.length - 1]["s.no"] === fundData[fundData.length - 1]["s.no"] ? `disabled` : ""}
                        disabled={tableData[tableData.length - 1]["s.no"] === fundData[fundData.length - 1]["s.no"] ? true : false}
                        onClick={handleNextClick}>next</button>
                </div>
            </div>
        </div>
    )
}

export default Datatable;