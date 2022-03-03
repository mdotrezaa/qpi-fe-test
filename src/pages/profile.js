import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { response } from "../assets/data/data";
import { Image } from "../components/elements/image";
import { Text } from "../components/elements/text";
import { Card } from "../components/modules/card";
import { GlobalContext } from "../context/GlobalState";

function Profile(props) {
  const { users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    full_name: "",
    expert_skills: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const detail = users.find(
      (item) => item.full_name.replace(/\s/g, "_").toLowerCase() == id,
    );
    console.log(detail);
    setSelectedUser(detail);
  }, []);

  return (
    <>
      <div className="grid-2">
        <Card type="single">
          <Image />
          <Text headingLevel="h2" color="white" type="capitalize">
            {selectedUser.full_name}
          </Text>
          <Text headingLevel="p" color="white" type="capitalize">
            {selectedUser.expert_skills.length > 0 ? (
              <Text headingLevel="h5">Expert Skill</Text>
            ) : (
              ""
            )}
            <ul className="list-center text-left">
              {selectedUser.expert_skills.length > 0
                ? selectedUser.expert_skills.map((item, index) => (
                    <>
                      <li key={index}>{item}</li>
                    </>
                  ))
                : ""}
            </ul>
          </Text>{" "}
          <Text headingLevel="p" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Card>
      </div>
    </>
  );
}

export default Profile;
