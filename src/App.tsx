import './App.css';
import './Navbar.css'

import { useState } from 'react';

import Home from './Home';
import FavouriteQuotes from './FavouriteQuotes';

function App() {
  const [active, setActive] = useState(Home);

  return (
    <div className="App">
      <div className='Navbar'>
        <nav>
          <ul>
            <li onClick={() => setActive(() => <Home />)}>
              <span role="img" aria-label="Home">🏠</span>
            </li>
            <li onClick={() => setActive(() => <FavouriteQuotes />)}>
              Favourite Quotes
            </li>
          </ul>
        </nav>
      </div>
      {active}
    </div>
  );
}


export default App;
