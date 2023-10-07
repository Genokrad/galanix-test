import { useEffect, useState } from "react";
import "./App.css";
import images from "./assets";
import {
  Container,
  StyledDescription,
  StyledList,
  StyledReset,
} from "./app.styled";
import Item from "./components/Item";
import getCurrentDateTime from "./utils";
import Modal from "./components/Modal";

function App() {
  const [imageArr, setImageArr] = useState([]);
  const [currentImg, setCurrentImg] = useState(null);

  const imageArray = Object.values(images);

  useEffect(() => {
    if (localStorage.getItem("images")) {
      setImageArr(JSON.parse(localStorage.getItem("images")));
      return;
    }
    setImageArr([...imageArray]);
    // eslint-disable-next-line
  }, []);

  const closeModal = () => {
    setCurrentImg(null);
  };

  const indexKeeper = (index) => {
    setCurrentImg(imageArr[index]);
  };

  const deleteImg = (indexToDel) => {
    setImageArr((prevState) => {
      const arr = prevState.filter((_, index) => index !== indexToDel);
      localStorage.setItem("images", JSON.stringify(arr));
      console.log(arr);
      return arr;
    });
  };

  const resetImgArr = () => {
    setImageArr([...imageArray]);
    localStorage.setItem("images", JSON.stringify([...imageArray]));
  };

  return (
    <Container>
      <StyledDescription>
        <h1>{imageArr.length} items</h1>
        <p>{getCurrentDateTime()}</p>
      </StyledDescription>

      <StyledList>
        {imageArr.map((image, index) => (
          <Item
            key={index}
            image={image}
            index={index}
            indexKeeper={indexKeeper}
            deleteImg={deleteImg}
            // divider={divider}
          />
        ))}
      </StyledList>
      {currentImg && <Modal currentImg={currentImg} closeModal={closeModal} />}
      <StyledReset onClick={resetImgArr}>Восстановить</StyledReset>
    </Container>
  );
}

export default App;
