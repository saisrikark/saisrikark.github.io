import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Home from './Home';
import FavouriteQuotes from './FavouriteQuotes';

import './styles.css';

function App() {
  const [active, setActive] = useState(Home);
  SetDefaultMode();

  return (
    <div className="App">
      <nav className="navbar">
        <div className="left-elements">
        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          <Button onClick={() => setActive(() => <Home />)}>🏠</Button>
          <Button onClick={() => setActive(() => <FavouriteQuotes />)}>FavQuotes</Button>
        </ButtonGroup>
        </div>
        <div className="right-elements">
        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          <Button onClick={() => ToggleDarkMode()}>🌑</Button>
        </ButtonGroup>
        </div>
      </nav>
      {active}
    </div>
  );
}

function darkModeEnabled(): boolean {
  let mode: string | null = localStorage.getItem("is-dark-mode-set")
  switch (mode) {
    case "true":
      return true
  }
  return false
}

function SetDefaultMode() {
  if (darkModeEnabled()) {
    document.body.classList.add('dark');
  }
}

function ToggleDarkMode() {
  if (document.body.classList.contains("dark")) {
    localStorage.setItem('is-dark-mode-set', "false");
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('is-dark-mode-set', "true");
  }
}


export default App;
