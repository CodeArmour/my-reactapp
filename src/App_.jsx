import Navbar from './components/Navbar.jsx'; 
import Filter from './components/Filter.jsx'; 
import Products from './components/Products.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AddProductModal from './components/AddProductModal.jsx';
import AddCategoryModal from './components/AddCategoryModal.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Filter />
      <Products />
      <AddProductModal/>
      <AddCategoryModal/>
    </>
  );
}

export default App;
