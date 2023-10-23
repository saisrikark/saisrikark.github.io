import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Home from './Home';
import './styles.css';
import FavouriteQuotes from './FavouriteQuotes';

function App() {
  const [activeComponent, setActiveComponent] = useState(Home);
  const [nonActiveMode, setNonActiveMode] = useState("🌑");

  const handleDarkModeOnclick = () => {
    if (document.body.classList.contains("dark")) {
      setNonActiveMode("🌑");
      document.body.classList.remove('dark');
      localStorage.setItem('is-dark-mode-set', "false");
    } else {
      setNonActiveMode("☀️");
      document.body.classList.add('dark');
      localStorage.setItem('is-dark-mode-set', "true");
    }
  }

  useEffect(() => {
    let mode: string | null = localStorage.getItem("is-dark-mode-set")
    switch (mode) {
      case "true":
        setNonActiveMode("☀️");
        document.body.classList.add('dark');
        break;
      default:
        setNonActiveMode("🌑");
        document.body.classList.remove('dark');
    }
  }, []);

  return (

    <div className="App">
      <nav className="navbar">
        <div className="left-elements">
          <ButtonGroup variant="outlined" aria-label="outlined primary button group">
            <Button onClick={() => setActiveComponent(() => <Home />)}>🏠</Button>
            <Button onClick={() => setActiveComponent(() => <FavouriteQuotes />)}>FavQuotes</Button>
          </ButtonGroup>
        </div>
        <div className="right-elements">
          <ButtonGroup variant="outlined" aria-label="outlined primary button group">
            <Button onClick={() => handleDarkModeOnclick()}>{nonActiveMode}</Button>
          </ButtonGroup>
        </div>
      </nav>
      <div className='activeComponent'>
        {activeComponent}
      </div>
    </div>
  );
}

export default App;
