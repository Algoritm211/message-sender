import Table from "./components/Table/Table";
import classes from './App.module.scss'
import FormBlock from "./components/FormBlock/FormBlock";
import Header from "./Header/Header";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <FormBlock />
      <Table />
    </div>
  );
}

export default App;
