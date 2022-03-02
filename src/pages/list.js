import React, { useEffect, useState } from "react";
import { response } from "../assets/data/data";
import { Text } from "../components/elements/text";
import { Card } from "../components/modules/card";

function List(props) {
  const [data, setData] = useState([]);

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
    setData((currentItems) => getData(currentItems));
    console.log(data);
  }, []);

  return (
    <>
      <div className='grid-1'>
        <Card data={data} type='list' />
      </div>
    </>
  );
}

export default List;
