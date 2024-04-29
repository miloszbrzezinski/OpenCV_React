import './App.css';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';

function App() {
  return (
    <>
    <Navbar />
    <div className="app">
        <Sidebar/>
        <div className="content">
          <img src="http://localhost:8000/raw" height="90%"/>
        </div>
    </div>
    </>
    
  );
}

export default App;
