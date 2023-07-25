import React from "react";
import Headers from "./header";
import { Link } from "react-router-dom";
import Qurimg from "./quranImg";

function Main() {
  return (
    <section>
      <Headers />
      <Qurimg />
      <div className="links">
        <Link to="QuranAudio1">
          <div className="quran">
            <i className="fa-solid fa-play" id="play"></i>
            <div>
              <p>Quran Offline (1) </p>
              <p>قاري عبدالرحمن</p>
            </div>
          </div>
        </Link>
        <Link to="QuranAudio2">
         <div className="quran">
            <i className="fa-solid fa-play" id="play"></i>
            <div>
              <p>Quran Offline (2) </p>
              <p>قاري عبدالرحمن</p>
            </div>
          </div>
        </Link>
        <Link to="QuranAudio3">
         <div className="quran">
            <i className="fa-solid fa-play" id="play"></i>
            <div>
              <p>Quran Offline (3) </p>
              <p>قاري عبدالرحمن</p>
            </div>
          </div>
        </Link>
        <Link to="Nasheed">
         <div className="quran">
            <i className="fa-solid fa-music" id="play"></i>
            <div>
              <p>Nasheed Offline </p>
              <p>قاري عبدالرحمن</p>
            </div>
          </div>
        </Link>
       </div>
    </section>
  );
}
export default Main;
