import { createContext } from "react";
import "./App.css";
import useCustomReducer from "./CustomHooks/useCustomReducer";
import RouteComp from "./Routes/RouteComp";

// export const CartContext = createContext();
function App() {
  // const [quantity, setQuantity] = useLocalStorage("quantity", 0);
  // const [state, setQuantity] = useCustomReducer("quantity", 0);
  // const cart = {
  //   cartQuantity: state.quantity,
  //   updateQuantity: setQuantity,
  // };

  return (
    <div className="App">
      {/* <CartContext.Provider value={cart}> */}
      <RouteComp />
      {/* </CartContext.Provider> */}
    </div>
  );
}

export default App;
