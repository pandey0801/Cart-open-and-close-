import Header from "./componenets/Layout/Header";
import { Fragment , useState } from "react";
import Meals from "./componenets/Meals/Meals";
import Cart from "./componenets/Cart/Cart";


function App() {
  // console.log("sdds");
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () =>
  {
    setCartIsShow(true);
  }

  const hideCartHandler = () =>
  {
    setCartIsShow(false);
  }

  return (
    <Fragment>
      {cartIsShow && <Cart onCloseCart={hideCartHandler}/>}
      <Header  onShowCart={showCartHandler}/>
          <Meals />
      </Fragment>
    
  );
}

export default App;
