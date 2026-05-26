import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/landing/Landing";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
