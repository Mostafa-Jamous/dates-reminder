import { Container } from "react-bootstrap";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import { person } from "./Data";
import { useState } from "react";

function App() {
  const [personData,setPersonData] = useState(person)
  const onDelete = () => {
    setPersonData([])
  }
  const showData = () => {
    setPersonData(person)
  }
  return (
    <div className="App">
      <Container>
        <DatesCount person={personData}/>
        <DatesList person={personData}/>
        <DatesAction onDelete={onDelete} show={showData}/>
      </Container>
    </div>
  );
}

export default App;
