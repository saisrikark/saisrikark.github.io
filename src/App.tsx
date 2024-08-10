import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './styles.css';
import About from './About';
import Portfolio from './Portfolio';

function App() {
  const [activeComponent, setActiveComponent] = useState(About);
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
            <Button onClick={() => setActiveComponent(() => <About />)}>About</Button>
            <Button onClick={() => setActiveComponent(() => <Portfolio />)}>Portfolio</Button>
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
