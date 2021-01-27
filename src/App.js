import Table from "./components/Table/Table";
import classes from './App.module.scss'
import FormBlock from "./components/FormBlock/FormBlock";

function App() {
  return (
    <div className={classes.container}>
      <FormBlock />
      <Table />
    </div>
  );
}

export default App;
