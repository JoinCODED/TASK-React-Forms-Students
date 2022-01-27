import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

const App = () => {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const toggleShow = () => show(!show);
  return (
    <div className="App">
      <HeaderAndTitle toggleShow={toggleShow} />
      {show ? <StudentsList list={studentsInfo} /> : <Form />}
    </div>
  );
};

export default App;
