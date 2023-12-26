import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <main>
      {showForm && <Form />}
      <button
        className="show-btn"
        onClick={() => {
          setShowForm((prev) => {
            return !prev;
          });
        }}
      >
        {showForm ? "-" : "+"}
      </button>
    </main>
  );
}
export default App;
