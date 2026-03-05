import Home from "./wordguessgame/pages/Home"
import Game from "./wordguessgame/pages/Game"
import Result from "./wordguessgame/pages/Result"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
const router = createBrowserRouter([
  {path: "/",element: <Home />},
  {path: "/game",element: <Game />},
  {path: "/result",element: <Result />}
]);
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
