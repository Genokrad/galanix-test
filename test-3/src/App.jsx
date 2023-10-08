import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getUniversity,
  setUniversity,
} from "./store/universitySlice/universitySlice";

import { Container } from "./app.styled";

import UniversityList from "./components/UniversityList";
import Button from "./Button";
import Form from "./components/Form";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [universitys, setUniversitys] = useState([]);
  const disatch = useDispatch();

  const inputSetter = (event) => {
    setInputCity(event.target.value);
  };

  const universitysSelector = useSelector(
    (state) => state.university.universityArr
  );

  const formSubmit = () => {
    event.preventDefault();
    setUniversitys([]);
    disatch(getUniversity(inputCity));
    //
  };

  const resetData = () => {
    disatch(setUniversity([]));
    setInputCity("");
    setTimeout(() => {
      console.log(inputCity);
    }, 0);
  };

  useEffect(() => {
    setUniversitys(universitysSelector);
  }, [universitysSelector]);

  return (
    <Container>
      <Form
        formSubmit={formSubmit}
        inputSetter={inputSetter}
        inputCity={inputCity}
      />
      <UniversityList universitys={universitys} />
      <Button func={resetData} text="Reset" />
    </Container>
  );
}

export default App;
