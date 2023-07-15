import './App.css';
import vibingKoti from './vibing_koti.gif'
import { motion } from "framer-motion"; 

function App() {
  return (
    <div className="App">
      <img src={vibingKoti} className='VibingKoti' alt='VibingKoti'></img>
    </div>
  );
}

export default App;
