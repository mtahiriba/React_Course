import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/menu';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Muhammad Tahir Memon</NavbarBrand>  
        </div>
      </Navbar>
      
      <Menu />
    </div>
  );
}

export default App;
