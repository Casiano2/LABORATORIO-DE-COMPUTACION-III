
import Table from "./Components/Table/table";

export function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 }, 
    { brand: "Burger King", income: 1927361 }, 
    { brand: "KFC", income: 1098463 }];
  
  return (
    <>
      <div>
        <h1> Tabla de ingresos netos</h1>
        
        <Table netIncomes={netIncomes} />

      </div>
    </>

  )
}
