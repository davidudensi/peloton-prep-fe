import { useReducer } from "react";

const reducer = (state, action) => {
  return { quantity: store(action.payload.key, state.quantity + 1) };
};

const store = (key, value) => {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
      console.log(key)
      return retreive(key, value);
    }
  } catch (error) {
    console.log(error);
    return value;
  }
};

const retreive = (key, value) => {
  if (typeof window === "undefined") {
    return value;
  }
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : value;
  } catch (error) {
    console.log(error);
    return value;
  }
};

const useCustomReducer = (key, initialValue) => {
  const [state, dispatch] = useReducer(reducer, {
    quantity: retreive(key, initialValue),
  });

  const setValue = () => {
    dispatch({ payload: { key: key } });
  };
  return [state, setValue];
};

export default useCustomReducer;
