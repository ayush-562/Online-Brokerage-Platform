import { Routes, Route } from "react-router-dom";
import './App.css';
import NotFound from "../../frontend/src/landing_page/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home/>} />
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
    </>
  );
}

export default App;
