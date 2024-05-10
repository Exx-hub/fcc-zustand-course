import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="App">
      <Column stateTitle="PLANNED" />
      <Column stateTitle="ONGOING" />
      <Column stateTitle="DONE" />
    </div>
  );
}

export default App;
