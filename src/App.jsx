import React, {useReducer} from "react";
import reducer from "./reducer";
const initialState = [
  { color: "Red", id: 1, completed: true },
  { color: "Blue", id: 2, completed: false },
  { color: "Green", id: 3, completed: true },
  { color: "Orange", id: 4, completed: false },
  { color: "White", id: 5, completed: false },
  { color: "Purple", id: 6, completed: false },
  { color: "Pink", id: 7, completed: true },
];
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isDone = (color) => {
    dispatch({
      type: "done",
      payload: color,
    });
  };
  return (
    <div className="block">
      <div className="block-left">
        <ul>
          {state.map(({ id, color, completed }) => (
            <li key={id}>
              <span
                style={{textDecoration: completed ? "2px line-through black" : ""}}>
                {color}
              </span>
              <button onClick={() => isDone(color)}>
                {completed ? "Revive" : "Kill"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="block-right">
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default App;