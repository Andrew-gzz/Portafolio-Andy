import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { LanguageProvider } from "./i18n/LanguageContext";
import Landing from "./pages/landing/Landing";
function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />}></Route>
        </Route>
      </Routes>
    </LanguageProvider>
  );
}

export default App;
