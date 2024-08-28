import React from "react";

const Table  = ({netIncomes}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Income</th>
                </tr>
            </thead>
            <tbody>
                {netIncomes.map((netIncomes) => (
                    <tr key={netIncomes.brand}>
                        <td>{netIncomes.brand}</td>
                        <td>{netIncomes.income}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Table;