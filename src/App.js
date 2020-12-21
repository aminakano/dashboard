import './App.css';
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App main-wrapper">
      <Sidebar/>
      <Dashboard />
    </div>
  );
}

export default App;
