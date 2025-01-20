import {Route,Routes} from "react-router-dom";
import "./App.css";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/settings" element={<SettingPage />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
