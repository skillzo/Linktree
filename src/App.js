import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Navigation/Home";
import Contacts from "./Navigation/Contacts";
import Error from "./Navigation/Error";

function App() {
  return (
    <Routes>
      <Route index element={<Contacts />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
