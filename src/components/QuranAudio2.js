import React from "react";
import { useState, useRef } from "react";

function QuranAudio2() {
  const [currentquran, setCurrentquran] = useState({
    quranName: "Quran Offline   قاري عبدالرحمن",
    quranSrc: "./audios/qari.mp3",
  });
  const [audioProgress, setAudioProgress] = useState(0);
  const handlequranProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };
  const currentAudio = useRef();
  const [isAudioPlaying, setAudioisPlaying] = useState(false);
  const handleAudio = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setAudioisPlaying(true);
    } else {
      currentAudio.current.pause();
      setAudioisPlaying(false);
    }
  };
  const [quranIndex, setquranIndex] = useState(0);
  const QuranApi = [
    {
      quranName: "001|Al-Fathia   قاري عبدالرحمن",
      quranSrc: "./audios/qari.mp3",
    },
    {
      quranName: " 053|Al-Najm  قاري عبدالرحمن",
      quranSrc: "./audios/qari2.mp3",
    },
    {
      quranName: "Quran    قاري عبدالرحمن",
      quranSrc: "./audios/qari.mp3",
    },
    {
      quranName: "QurOffline   قاري عبدالرحمن",
      quranSrc: "./audios/qari2.mp3",
    },
  
  ];

  const handlePrevquran = () => {
    if (quranIndex === 0) {
      let setNumber = QuranApi.length - 1;
      setquranIndex(setNumber);
      updateCurrentquran(setNumber);
    } else {
      let setNumber = quranIndex - 1;
      setquranIndex(setNumber);
      updateCurrentquran(setNumber);
    }
  };

  const handleNextquran = () => {
    if (quranIndex >= QuranApi.length - 1) {
      let setNumber = 0;
      setquranIndex(setNumber);
      updateCurrentquran(setNumber);
    } else {
      let setNumber = quranIndex + 1;
      setquranIndex(setNumber);
      updateCurrentquran(setNumber);
    }
  };

  const handleAnyquran = () =>{
    if (quranIndex === 0) {
      let setNumber = QuranApi.length - 1;
      setquranIndex(setNumber);
      updateCurrentquran(setNumber);
    } else {
      let setNumber = quranIndex * 0;
      setquranIndex(setNumber);
      updateCurrentquran(setNumber);
    }

    
  }
  const handleRepeatquran = () =>{

    if (quranIndex === 0) {
      let setNumber = QuranApi.length - 1;
      setquranIndex(setNumber);
      updateCurrentquran(setNumber);
    } else {
      let setNumber = quranIndex + 0;
      setquranIndex(setNumber);
      updateCurrentquran(setNumber);
    }
    
  }

  const updateCurrentquran = (number) => {
    let quranObject = QuranApi[number];
    currentAudio.current.src = quranObject.quranSrc;
    currentAudio.current.play();
    setCurrentquran({
      quranName: quranObject.quranName,
      quranSrc: quranObject.quranSrc,
    });
    setAudioisPlaying(true);
  };

  const [quranTotalLength, setquranTotalLength] = useState("04 : 30");
  const [quranCurrentTime, setquranCurrentTime] = useState("00 : 00");

  const handleAudioUpdate = () => {
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration * 60);
    let quranTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setquranTotalLength(quranTotalLength0);

    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime * 60);
    let quranCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setquranCurrentTime(quranCurrentT);

    const progress = parseInt(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  // const handleRepeatquran = () =>{
  //   if(currentquran === currentquran){
  //     currentAudio.current.play();
  //   }else{
  //     currentAudio.current.pause();
  //   }
  // }
  return (
    <section>
      <div className="quran1">
        <audio
          src={currentquran.quranSrc}
          ref={currentAudio}
          onEnded={handleNextquran}
          onTimeUpdate={handleAudioUpdate}></audio>
        <div className="quran-Container">
          <p className="quranPayer">{currentquran.quranName}</p>
          <div className="quranControlers">
            <i className="fa-solid  fa-shuffle" onClick={handleAnyquran}></i>
            <i className="fa-solid fa-backward" onClick={handlePrevquran}></i>
            <i
              className={`fa-solid ${
                isAudioPlaying ? "fa-circle-pause" : "fa-circle-play"
              } playBtn`}
              onClick={handleAudio}></i>
            <i className="fa-solid fa-forward" onClick={handleNextquran}></i>
            <i className="fa-solid fa-repeat" onClick={handleRepeatquran}></i>
          </div>
          <div className="quranTimer">
            <p className="quranCurrentTime">{quranCurrentTime}</p>
            <p className="quranTotalLength">{quranTotalLength}</p>
          </div>
          <input
            type="range"
            name="quranProgressBar"
            className="quranProgressBar"
            value={audioProgress}
            onChange={handlequranProgressBar}></input>
        </div>
      </div>
    </section>
  );
}
export default QuranAudio2;
