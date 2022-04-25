import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PetList from './components/PetList';
import PetForm from './components/PetForm';
import PetPage from './components/PetPage';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PetList/>} />
          <Route path="/add" element={<PetForm/> } />
          <Route path="/pets/:id" element={<PetPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
