import React from "react";
import { Text } from "../elements/text";

export const Card = (props) => {
  const { data, type } = props;
  return (
    <>
      {data.map((item) => {
        return (
          <div className={`card-${type} text-center`}>
            <Text headingLevel='h4' color='white'>
              {item.full_name}
            </Text>
            <a
              href={`/profile/${item.full_name
                .replace(/\s/g, "_")
                .toLowerCase()}`}>
              test
            </a>
            <Text headingLevel='p' color='white' type='capitalize'>
              {item.expert_skills.length > 0
                ? item.expert_skills.map(
                    (item, index) => (index ? ", " : "") + item
                  )
                : "-"}
            </Text>
          </div>
        );
      })}
    </>
  );
};
