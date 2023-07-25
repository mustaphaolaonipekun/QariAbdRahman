import "./App.css";
import QuranAudio1 from "./components/QuranAudio1";
import Main from "./components/main";
import { Route, Routes } from "react-router-dom";
import Nasheed from "./components/nasheed";
import QuranAudio3 from "./components/QuranAudio3";
import QuranAudio2 from "./components/QuranAudio2";

const App = () => {
  return (
    <section>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/QuranAudio1" element={<QuranAudio1 />} />
        <Route path="/QuranAudio2" element={<QuranAudio2 />} />
        <Route path="/QuranAudio3" element={<QuranAudio3 />} />
        <Route path="/Nasheed" element={<Nasheed />} />

      </Routes>
    </section>
  );
};
export default App;
