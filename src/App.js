import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getItems, testAPI } from './services/ItemsService';

import Layout from './pages/Layout';
import Test from './pages/Test';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ContactUs from './pages/ContactUs';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems('https://api.jsonbin.io/v3/b/64d8d9699d312622a3908cc8').then((data) => setItems(data));
    // testAPI('http://localhost:5000/api/employees/').then((data) => console.log(data));
  }, []);

  

  const threeBest = items.slice(0, 3);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home threeBest={threeBest} />} />
          <Route path="/Test" element={<Test products={items} />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* <Route path="productPage" element={<ProductPage />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
