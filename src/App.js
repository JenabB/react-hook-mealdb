import "./App.css";
import { GlobalProvider } from "./components/hooks/GlobalState";
import Navigation from "./Navigation";

function App() {
  return (
    <GlobalProvider>
      <Navigation />
    </GlobalProvider>
  );
}

export default App;
