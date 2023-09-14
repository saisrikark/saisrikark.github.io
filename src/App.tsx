import './App.css';
import './Navbar.css'

import { useState } from 'react';
import About from './About';
import Home from './Home';

function App() {
  const [active, setActive] = useState(Home)

  return (
    <div className="App">
      <div className='Navbar'>
          <nav>
            <ul>
              <li onClick={() => setActive(Home)}>🏠</li>
              <li onClick={() => setActive(About)}>About</li>
            </ul>
          </nav>
      </div>
      {active}
    </div>
  );
}

export default App;
