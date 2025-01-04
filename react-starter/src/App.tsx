import { Route, Routes } from "react-router-dom";

import "./App.scss";
import HomeComponent from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
      </Routes>
    </>
  );
}

export default App;
