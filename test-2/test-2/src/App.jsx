import { useEffect, useState } from "react";
import "./App.css";
import images from "./assets";
import { Container, StyledList } from "./app.styled";
import Item from "./components";

function App() {
  const [imageArr, setImageArr] = useState([]);

  const imageArray = Object.values(images);

  useEffect(() => {
    setImageArr(imageArray);
  }, []);

  return (
    <Container>
      <StyledList>
        {imageArr.map((image, index) => (
          <Item key={index} image={image} index={index} />
        ))}
      </StyledList>
    </Container>
  );
}

export default App;
