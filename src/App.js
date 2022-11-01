import './css/App.css';
import Layout from './layouts/layout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Join from './pages/join';
import Login from './pages/login';
function App() {
  return (
    <Layout>
     <BrowserRouter>
     <Routes>
      {/* <Route path="/" element={<Main />} /> */}
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
     </BrowserRouter>
    </Layout>
  );
}

export default App;
