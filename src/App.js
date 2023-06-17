import Header from "./compnents/Header";
import Balance from "./compnents/Balance";
import IncomeExpences from "./compnents/IncomeExpences";
import TransactionList from "./compnents/TransactionList";
import AddTransaction from "./compnents/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpences />
      <TransactionList />
      <AddTransaction />
      
      </GlobalProvider>
  );
}

export default App;
