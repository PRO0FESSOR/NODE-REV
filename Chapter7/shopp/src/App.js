import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Productlist from './components/Productlist';
import Addproduct from './components/Addproduct';

function App() {
  return (
    <>
    <BrowserRouter>

          <Routes>
            <Route path="/" element={<Productlist/>} />
            <Route path="/add" element={<Addproduct/>} />
          </Routes>

    </BrowserRouter>
      
      
    </>
  );
}

export default App;
