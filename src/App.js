import { useEffect, useState } from "react";
import "./App.css";
import { response } from "./assets/data/data";
import List from "./pages/list";

function App() {
  const [data, setData] = useState();

  const getData = () => {
    const value = response.data.map(({ id, first_name, last_name, skills }) => {
      return {
        id: id,
        full_name: first_name + " " + last_name,
        expert_skills: Object.keys(skills)
          .filter((key) => skills[key] == "expert")
          .map((name) => name)
      };
    });
    return value;
  };
  useEffect(() => {
    setData(getData());
    console.log(data);
  }, []);

  return (
    <div className='App'>
      <List />
    </div>
  );
}

export default App;
