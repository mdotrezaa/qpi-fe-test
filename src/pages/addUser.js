import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import FormInput from "../components/elements/forminput";
import { Card } from "../components/modules/card";
import { Text } from "../components/elements/text";
import { Button } from "../components/elements/button";

const AddUser = () => {
  const [full_name, setName] = useState("");
  const [expert_skills, setSkill] = useState("");
  const [error, setError] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      full_name,
      expert_skills,
    };
    if (validation()) {
      addUser(newUser);
      history("/");
    }
  };
  const validation = (e) => {
    let errors=""
    if (!full_name) {
      errors = `Please fill name above`;
    }
    if (errors) {
      setError(errors)
      return false;
    }
      return true 
    
  };
  const onChange = (e) => {
    setName(e.target.value);
  };
  const handleCheckboxChange = (e) => {
    let newArray = [...expert_skills, e.target.value];
    if (expert_skills.includes(e.target.value)) {
      newArray = newArray.filter((day) => day !== e.target.value);
    }
    setSkill(newArray);
  };
  return (
    <div className="grid-2">
      <Card type="single">
        <Text headingLevel="h1" color="white">
          Create Person
        </Text>
        <form className="grid-3 text-left" onSubmit={onSubmit}>
          <FormInput
            label="Name"
            type="text"
            inputValue={full_name}
            onChange={onChange}
            inputName="full_name"
            placeholder="Enter Name"
            required
          />
          <Text headingLevel="span" type="danger">{error}</Text>

          <div>
            <Text headingLevel="p" color="white">Expert Skills:</Text>
            <FormInput
              type="checkbox"
              onChange={handleCheckboxChange}
              id="skill"
              inputName="expert_skills"
              inputValue="javascript"
            />
            <FormInput
              type="checkbox"
              onChange={handleCheckboxChange}
              id="skill"
              inputName="expert_skills"
              inputValue="phyton"
            />
            <FormInput
              type="checkbox"
              onChange={handleCheckboxChange}
              id="skill"
              inputName="expert_skills"
              inputValue="php"
            />
            <FormInput
              type="checkbox"
              onChange={handleCheckboxChange}
              id="skill"
              inputName="expert_skills"
              inputValue="golang"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
