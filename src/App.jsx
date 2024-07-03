import { Outlet } from "react-router";
import { GlobalStyle } from "./style";
import { ButtonHelpEkyte } from "./pages/components/help/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
      <ButtonHelpEkyte />
    </>
  );
}

export default App;
