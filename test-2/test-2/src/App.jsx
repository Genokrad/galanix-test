import { useEffect, useState } from "react";
import "./App.css";
import images from "./assets";
import { Container, StyledDescription, StyledList } from "./app.styled";
import Item from "./components/Item";
import getCurrentDateTime from "./utils";
import Modal from "./components/Modal";

function App() {
  const [imageArr, setImageArr] = useState([]);
  const [currentImg, setCurrentImg] = useState(null);

  const imageArray = Object.values(images);

  useEffect(() => {
    setImageArr([...imageArray]);
  }, []);

  const closeModal = () => {
    setCurrentImg(null);
  };

  const indexKeeper = (index) => {
    setCurrentImg(imageArr[index]);
  };

  const deleteImg = (indexToDel) => {
    setImageArr((prevState) =>
      prevState.filter((image, index) => index !== indexToDel)
    );
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
          />
        ))}
      </StyledList>
      {currentImg && <Modal currentImg={currentImg} closeModal={closeModal} />}
    </Container>
  );
}

export default App;
