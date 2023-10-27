import './App.css';
import Navbar from "./components/Navbar"
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Productos en Venta" />
    </>
  );
}

export default App;
