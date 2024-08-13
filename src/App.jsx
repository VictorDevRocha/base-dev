import { Outlet } from "react-router";
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
