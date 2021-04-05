import "./App.css";
import { GlobalProvider } from "./components/hooks/GlobalState";
import Navigation from "./Navigation";

function App() {
  return (
    <GlobalProvider>
      <div className="App bg-gray-100">
        <Navigation />
      </div>
    </GlobalProvider>
  );
}

export default App;
