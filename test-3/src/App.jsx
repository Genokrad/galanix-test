import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getUniversity,
  setUniversity,
} from "./store/universitySlice/universitySlice";

import { Container } from "./app.styled";

import UniversityList from "./components/UniversityList";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [universitys, setUniversitys] = useState([]);
  const [favorite, setFavorite] = useState([]);
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
    setFavorite([]);
  };

  const addToFavotite = (index) => {
    let midleRes = [...favorite];
    const inArr = midleRes.find((item) => item === index);

    if (!inArr) {
      midleRes.push(index);
      setFavorite(midleRes);

      return;
    }
    if (inArr) {
      midleRes = midleRes.filter((item) => item !== index);
      setFavorite(midleRes);

      return;
    }
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
      <p>University added to favorite {favorite.length} </p>
      <UniversityList
        universitys={universitys}
        addToFavotite={addToFavotite}
        favorite={favorite}
      />
      <Button func={resetData} text="Reset" />
    </Container>
  );
}

export default App;
