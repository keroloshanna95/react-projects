import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "set":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

export default function Calender() {
  const intailState = {
    count: 0,
    step: 1,
  };
  const [state, dispatch] = useReducer(reducer, intailState);
  const { count, step } = state;

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleIncrement() {
    dispatch({ type: "inc" });
  }

  function handleDecrement() {
    if (count - step >= 0) {
      dispatch({ type: "dec" });
    }
  }

  function handleInput(e) {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      dispatch({ type: "set", payload: value });
    }
  }

  function handleRange(e) {
    dispatch({ type: "setStep", payload: parseInt(e.target.value) });
  }

  return (
    <div className="calender h-dvh bg-amber-500 p-4 rounded-lg flex flex-col items-center justify-center">
      <div className="form-class flex flex-col items-center justify-center gap-4">
        <div className="flex gap-2">
          <input type="range" min="1" max="10" onChange={handleRange} />
          <p className="font-bold">{step}</p>
        </div>

        <div className="flex justify-center items-center gap-1">
          <button
            className="bg-yellow-200 w-10 h-10 text-4xl font-bold hover:cursor-pointer"
            onClick={handleDecrement}
          >
            -
          </button>
          <input
            type="number"
            className="bg-white font-bold text-2xl p-2 w-50 h-10"
            name="input"
            id="input"
            value={count}
            onChange={handleInput}
          />
          <button
            className="bg-green-200 w-10 h-10 text-4xl font-bold hover:cursor-pointer"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <div className="date">
          <p>{date.toDateString()}</p>
        </div>

        <button className="bg-blue-200 w-20 h-10 text-lg hover:cursor-pointer">
          Reset
        </button>
      </div>
    </div>
  );
}
