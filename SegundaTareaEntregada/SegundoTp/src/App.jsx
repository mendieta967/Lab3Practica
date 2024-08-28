import Table from './componentes/Table';
import "./App.css"

const App = () => {
  const netIncomes = [
    {
      brand: "McDonalds",
      income: 1291283,
    },
    {
      brand: "Burger King",
      income: 1927361,
    },
    {
      brand: "KFC",
      income: 1098463,
    },
  ];

  const Incomes =
    netIncomes.reduce((accumulator, elem) =>
      accumulator + elem.income, 0) / netIncomes.length;


  return (
    <>
    <h1>Práctico Nro 02</h1>
      <Table netIncomes={netIncomes} />
      <p>Average: {Math.trunc(Incomes)}</p>
    </>
  )
}

export default App
