import "./styles/App.scss";

import Todos from "./components/Todos";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Todoro App</h1>
      <Todos />
    </div>
  );
}

export default App;
