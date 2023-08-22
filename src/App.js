import "./App.css";
import ComponentC from "./components/ContextApi/ComponentC";
import {UserProvider} from "./components/ContextApi/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Vishwas">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
