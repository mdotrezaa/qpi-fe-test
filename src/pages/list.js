import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { response } from "../assets/data/data";
import { Button } from "../components/elements/button";
import { Text } from "../components/elements/text";
import { Card } from "../components/modules/card";
import { GlobalContext } from "../context/GlobalState";

function List(props) {
  const { users } = useContext(GlobalContext);
  const history = useNavigate();

  return (
    <>
      <div className="grid-1">
        {users.map((item, index) => (
          <Card onClick={()=> history("/profile/" + item.full_name.replace(/\s/g, "_").toLowerCase())} key={index} type="list">
            <Text headingLevel="h2" color="white" type="capitalize">
              {item.full_name}
            </Text>
            <Text headingLevel="h5" color="white">
              Expert Skill:
            </Text>
            <Text headingLevel="p" color="white" type="capitalize">
              {item.expert_skills.length > 0
                ? item.expert_skills.map(
                    (item, index) => (index ? ", " : "") + item,
                  )
                : "-"}
            </Text>{" "}
          </Card>
        ))}
      </div>
      <div className="center">

      <Button onClick={() => history("/create")} type="create">
        +
      </Button>
      </div>

    </>
  );
}

export default List;
