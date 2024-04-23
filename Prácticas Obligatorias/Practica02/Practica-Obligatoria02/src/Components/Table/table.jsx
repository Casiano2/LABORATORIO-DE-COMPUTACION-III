function Table({ netIncomes }) {

    const totalIncome = netIncomes.reduce((acc, item) => acc + item.income, 0);
    const averageIncome = totalIncome / netIncomes.length;

    return (
        <div>
            <h1>TABLE</h1>
            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Income</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((item, index) => (
                        <tr key={index}>
                            <td>{item.brand}</td>
                            <td>{item.income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Promedio de Ingreso Neto: {averageIncome}</p>
        </div>


    );

}
export default Table;