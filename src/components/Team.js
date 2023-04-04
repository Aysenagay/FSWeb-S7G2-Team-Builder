import React from "react";
const Team = (props) => {
  const { team } = props;
  return (
    <div>
      {team.map((uye) => (
        <p>
          {uye.name},{uye.email}
        </p>
      ))}
    </div>
  );
};
export default Team;
