import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.scss';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Base from './components/layouts/Base';
// import Home from './pages/Home';
import Marketplace from './pages/Marketplace';


function App() {
  return (
    <>
     <Router>
    <Base>
    <Routes>
      <Route index path='/' element={ <Marketplace/>} ></Route>
      
    </Routes>
    </Base>
    </Router>
    
    </>
  );
}

export default App;
