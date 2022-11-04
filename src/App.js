import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Navigation/Home";
import Contacts from "./Navigation/Contacts";
import Error from "./Navigation/Error";
import { Wrapper } from "./Components/Wrapper/Wrapper";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
