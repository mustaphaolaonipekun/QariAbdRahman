import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// function Qari() {
//   return (
//     <main>
//       <Main />
//     </main>
//   );
// }

// const Main = () => {
  // const page = () => {
  //   return (
  //     <section className="about">
  //       <div className="heads">
  //         <i className="fa-solid  fa-arrow-left"></i>
  //         <h2>About قاري عبدالرحمن</h2>
  //       </div>
  //       <div className="page">
  //         <h3>Version 1.0</h3>
  //         <p>
  //           Developed by <b>Musty dev</b>
  //         </p>
  //         <a className="dev" href="https://github.com/mustaphaolaonipekun">
  //           developer's page
  //         </a>
  //         <div className="copy">
  //           <hr></hr>
  //           <h4>copyright (c) - 2023</h4>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };
//   const Quran1 = () =>{
//     return(
//       <section className="quran1">
//         <div className="heads">
//           <i className="fa-solid  fa-arrow-left"></i>
//           <h2>Quran Offline   قاري عبدالرحمن</h2>
//         </div>

//          <div className="qur">
//           <i className="fa-solid fa-play" id="playpause"></i>
//           <h2>001 |Al-fathia| </h2>
//           <p>Quran Offline  قاري عبدالرحمن</p>
//         </div>

//       </section>
//     )
//   }
//   return (
//     <section>
//       <div className="head">
//         <h1>Abdrahman Adekunle قاري عبدالرحمن</h1>
//         <i className="fa-solid fa-share"></i>
//         <i className="fa-solid fa-bars" onClick={page}></i>
//       </div>
//       <div className="qariimg">
//         <img src="./images/qari.png" alt=""></img>
//       </div>
//       <div className="qurans">
//         <div className="quran" onClick={Quran1}>
//           <i className="fa-solid fa-play"></i>
//           <h2>Quran Offline  قاري عبدالرحمن</h2>
//         </div>
//         <div className="quran">
//           <i className="fa-solid fa-play"></i>
//           <h2>Quran Offline   قاري عبدالرحمن</h2>
//         </div>
//         <div className="quran">
//           <i className="fa-solid fa-book"></i>
//           <h2>Full Quran Arabic Text</h2>
//         </div>
//         <div className="quran">
//           <i className="fa-solid fa-music"></i>
//           <h2>An- Nasheed Offline</h2>
//         </div>

//       </div>
//     </section>
//   );
// };

// ReactDOM.render(<Qari />, document.getElementById('root'));