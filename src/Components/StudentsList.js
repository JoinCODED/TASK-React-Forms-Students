import React from "react";
import Student from "./Student";

const StudentsList = ({ list }) => {
  return (
    <div>
      {list.map((student) => (
        <Student student={student} />
      ))}
    </div>
  );
};

export default StudentsList;
