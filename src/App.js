import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
// import bg from './Images/bg.jpg'
import bg1 from './Images/bg1.jpg'
import {Routes,Route} from 'react-router-dom'

function App() {



  const styles = {
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
  
  }

  return (
    <div className="App" style={styles}>
      <h1 className="font-signature font-extrabold text-2xl fixed text-white px-6 py-6">Coded-Satya</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
