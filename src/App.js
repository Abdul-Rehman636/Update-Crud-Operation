import "./App.css";
import UpdateForm from "./UpdateForm";
import UpdateList from "./UpdateList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Form" element={<UpdateForm />} />
        <Route path="/" element={<UpdateList />} />
      </Routes>
    </>
  );
}

export default App;
