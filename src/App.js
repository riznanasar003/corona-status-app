import logo from './logo.svg';
import './App.css';
import AddPatients from './Components/AddPatients';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddPatients/>}/>
          <Route path='/viewall' element={<ViewAll/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
