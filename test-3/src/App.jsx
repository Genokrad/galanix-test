import axios from "axios";
import { useDispatch } from "react-redux";
import { getUniversity } from "./store/universitySlice/universitySlice";

function App() {
  const disatch = useDispatch();
  // axios
  //   .get("http://universities.hipolabs.com/search?country=Ukraine")
  //   .then((response) => {
  //     console.log(response);
  //   });

  return (
    <div>
      <button onClick={() => disatch(getUniversity())}>Hi</button>
    </div>
  );
}

export default App;
