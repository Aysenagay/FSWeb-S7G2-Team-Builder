import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const [team, setTeam] = useState([]);
  const [ekip, setEkip] = useState({ name: "", email: "", rol: "" });
  const handleSubmit = (x) => {
    x.preventDefault();
    setTeam([...team, ekip]);
    setEkip({ name: "", email: "", rol: "" });
  };
  const handleChange = (event) => {
    setEkip({ ...ekip, [event.target.name]: event.target.value });
  };

  return (
    <div className="App">
      <h1 className="baslik">BİZE KATIL!</h1>
      <Form
        ekip={ekip}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Team team={team} />
    </div>
  );
}

export default App;
