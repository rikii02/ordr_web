// App.js
import './App.css';
import OplaceWrapper from './components/OplaceWrapper';

function App() {
  return (
    <div className="App">
      <div className="top-section">
        <div className="top-section-content">
          <h1>Ordr Web</h1>
          <h2>Ordr Software Solutions</h2>
        </div>
      </div>
      <div className="bottom-section">
        <OplaceWrapper />
      </div>
    </div>
  );
}

export default App;
