import { hot } from "react-hot-loader/root";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default hot(App);
