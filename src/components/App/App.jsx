import { dedNum, dedNum2, dedNum3, winGame, resetEl } from "../../store/actions/action";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));

  console.log(randomNum);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const ShortIn = (event) => {
    event.preventDefault();
    if (+event.target.usernum.value === randomNum) {
      dispatch(dedNum())
    } else if (event.target.usernum.value < randomNum) {
      dispatch(dedNum3())
    } else if (event.target.usernum.value > randomNum) {
      dispatch(dedNum2())
    } else if (event.target.usernum.value > randomNum) {
      dispatch(winGame())
    }

    event.target.reset();
  };

  const resetHandle = () => {
    dispatch(resetEl());
    setRandomNum(Math.floor(Math.random() * 100));
  };


  return (
    <div className="container">
    <form onSubmit={ShortIn} className="form-container">
      <input type="number" name="usernum" className="input-field" />
      <input type="submit" value="Угадать" className="submit-button" />
    </form>
    <>
      <h1>{state.title}</h1>
      {state.completed ? (
        <button onClick={resetHandle} className="reset-button">{state.description}</button>
      ) : (
        <p>{state.description}</p>
      )}
    </>
  </div>
  );
};
export default App;