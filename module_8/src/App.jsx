import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import DefaultPage from "./Pages/Content";
import ExpensePage from "./Pages/ExpensePage";
import IncomePage from "./Pages/IncomePage";
function App() {
  return (
    <>
      <div className="mt-20 justify-center  max-w-screen-xl m-auto mb-16">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/income" element={<IncomePage />} />
            <Route path="/expenses" element={<ExpensePage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
