import React from 'react';
import './css/App.css';
import Layout from './layouts/layout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Join from './pages/join';
function App() {
  return (
    <Layout>
     <BrowserRouter>
     <Routes>
      {/* <Route path="/" element={<Main />} /> */}
      <Route path="/join" element={<Join />} />
      {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
     </BrowserRouter>
    </Layout>
  );
}

export default App;
