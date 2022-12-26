import "./App.css";
import { useState } from "react";

function App() {
  const [cor, setColor] = useState({
    cor1: "",
    cor2: "",
    cor4: "",
    cor3: "",
    cor5: "",
    cor6: "",
    cor7: "",
    cor8: "",
    cor9: "",
    cor10: "",
    cor11: "",
    cor12: "",
    cor13: "",
    cor14: "",
  });

  const addInputsRender = (inicio, fim) => {
    var inputs = [];
    for (let i = inicio; i <= fim; i++) {
      inputs.push(
        <input
          type="color"
          style={{ margin: "5%", width: "100px", padding: 0 }}
          onBlur={(e) => setColor({ ...cor, ["cor" + i]: e.target.value })}
        />
      );
    }
    return inputs;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "20%",
            }}
          >
            <p>Clique nos blocos pretos e escolha as cores para pintar</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "50px",
              flexDirection: "column",
            }}
          >
            {addInputsRender(7, 15)}
          </div>
          <svg
            width={350}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 445 357.62"
          >
            <defs></defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="bg1">
                <path
                  class="cls-1"
                  fill={cor.cor7}
                  d="M344.57,43.76l2.82-38.07L325.67,4.31l.57-3.53-33,2.57-1,4.42-2.72-4.13-26.5,2.07-1,4.73L259.71,6,236.49,7.79,233.94,0l-41.8,2.72L191,9.33A24.46,24.46,0,0,0,174,2L145.14.81l-2.23,8.38A19.89,19.89,0,0,0,141,7.47a19.3,19.3,0,0,0-14.64-3.93L94.2,7.43l-3,28.34,5.86,7.52,3.64,31.2,16.37,14.6,28.16-3.41a20.47,20.47,0,0,0,7-2.11l37,1.57L189,86.86,217,85,218.54,78l4.14-.27,1.67,6.85,20.76-1.35L247,89l27.87-2.17.59-3,1,2.89,25.9-2-.09,1.21,36.39,2.34,16.4-14.59,8.6-28.85Z"
                ></path>
                <rect
                  class="cls-1"
                  fill={cor.cor7}
                  x="89.42"
                  y="73.49"
                  width="263.9"
                  height="39.28"
                ></rect>
                <path
                  class="cls-1"
                  fill={cor.cor7}
                  d="M425.93,120.4,445,65.34,396,52.49l-1.75,4.68-1.42-.12-5.62-.33c-14.22-.83-26.27,2.55-35.81,10a42.12,42.12,0,0,0-12.66,16A45.52,45.52,0,0,0,314.32,75L262,72.65l-4.85,17.67-5.09-19.85H192.82l.14-.54-12.37.54h-3.07l0,.14-41.55,1.84-.66,4-29.41,1.63,6.59-24L57.21,45.51,56,50.79c-.69,0-1.29,0-1.81.08l-5.87.43C33.59,52.39,21.67,57.51,12.9,66.5,3.33,76.24-1,89,.18,104.28A50.53,50.53,0,0,0,3.78,120l10.64,18.37L4.81,189.85l19.47,24.92,4.88,2.31c13.27,6.28,26.55,9.47,39.48,9.47,1.92,0,3.86-.07,5.76-.21,14.73-1.09,26.88-6.11,36.11-14.92l0,0a45.14,45.14,0,0,0,9.69-13.58l1.09,23.77H210l4-17.13h12.32l2.41,17.13H344.58A78.3,78.3,0,0,0,366.1,226c1.42.08,2.84.13,4.23.13,12.28,0,23-3.27,31.83-9.71l0,0a43.57,43.57,0,0,0,10.61-11.18l15.34-21.09c.67-.87,1.32-1.75,1.93-2.66l.85-1.18h.33a52.19,52.19,0,0,0,7.57-25C439.66,141.18,435.32,129.48,425.93,120.4Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor8}
                  d="M93.46,180.86Q80.7,193.06,59.75,194.6q-21.86,1.62-44.82-9.26l7.15-38.25L39,153.27q10.22,3.25,17.38,2.72,8.25-.62,7.81-6.68-.33-4.55-13.9-8.11-17.5-4.6-25.46-9.74-14.19-9.42-15.56-28Q7.85,84.52,19.35,72.81,30.17,61.73,48.9,60.33l5.88-.43c.73-.06,1.81-.07,3.23,0s3.17.08,5.27.18l1-4.26,36.49,5.66-10.69,39c-3.83-1.88-22.21-7.21-30-6-5.83.88-8.67,2.67-8.37,6.71q.29,3.8,13.66,7.38,17.34,4.82,24.93,10,14,9.64,15.37,28Q107.24,167.46,93.46,180.86Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor8}
                  d="M172.09,113.76l-24.74,1,3.46,69.53L121,185.82l-3.62-70-24.19,1.45,6.1-29.7,44.08-2.44.65-4,37-1.64Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor8}
                  d="M348.49,123q.74-16.44-9-27.3T313.91,84.09l-44.87-2-8.24,30,6.87.31-3.28,72.83,31.29,1.41,1.37-30.46,12.07,31.07,37.43,1.68-15.9-34.11Q347.51,144.54,348.49,123Z"
                ></path>
                <path
                  class="cls-1"
                  fill={cor.cor7}
                  d="M304.73,112.06l-9.15-.29L295,132l9.14.29a10.11,10.11,0,1,0,.64-20.21Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor8}
                  d="M413.61,185.49Q400,195.4,380,194.24q-20.89-1.22-41.25-14.4l11.57-35.3,15.21,8q9.25,4.35,16.1,4.75,7.9.47,8.24-5.33.25-4.35-12.13-9.43-16-6.57-22.88-12.42-12.23-10.7-11.2-28.45,1.07-18.11,13.43-27.74,11.63-9.14,29.53-8.09l5.62.33q1,.06,3.06.36c1.34.2,3,.48,5,.84l1.46-3.92L433,71.61l-13,38.66a79.77,79.77,0,0,0-13.16-6.76q-9.12-3.81-13.86-4.08-8.42-.5-8.76,5.3-.21,3.63,12,8.7Q412,120.17,418.5,126q12,10.88,11,28.44Q428.35,174.54,413.61,185.49Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor8}
                  d="M237.53,185.3l-2.66-15.11h-29L201.5,185.3H167.18l20.57-76.55-9.47-.09,6.81-29.12H244.9L272.05,185.3Z"
                ></path>
                <path
                  class="cls-3"
                  fill={cor.cor9}
                  d="M136.81,35Q143,30.11,142,21.8A13.06,13.06,0,0,0,127.11,9.88L100,13.16,98.3,29.72l3.6-.44,4.56,39,26.47-3.2a15.08,15.08,0,0,0,10.13-5.24,13.74,13.74,0,0,0,3.36-11.2,17.51,17.51,0,0,0-2.84-8.32A21.11,21.11,0,0,0,136.81,35Z"
                ></path>
                <path
                  class="cls-3"
                  fill={cor.cor9}
                  d="M190.79,64l-8.12-17.59q8.88-5.55,9.36-17.16.36-8.84-4.82-14.66A18.11,18.11,0,0,0,173.7,8.41L150,7.41,145.7,23.56l3.63.15-1.6,39.18,16.52.7.67-16.39,6.44,16.69,19.22.81.54,0Z"
                ></path>
                <polygon
                  class="cls-3"
                  fill={cor.cor9}
                  points="337.73 49.78 340.55 11.65 321.58 10.45 319.21 26.69 322.83 26.97 319.96 65.74 350.23 67.69 355.29 50.74 337.73 49.78"
                ></polygon>
                <polygon
                  class="cls-3"
                  fill={cor.cor9}
                  points="297.72 9.41 293.59 32 285.92 10.33 269.44 11.62 265.24 34.22 257.64 12.54 236.72 14.18 254.45 68.49 276.08 66.8 280.35 44.77 287.94 65.87 309.57 64.18 318.65 7.77 297.72 9.41"
                ></polygon>
                <path
                  class="cls-3"
                  fill={cor.cor9}
                  d="M229,63.42l-1.91-7.82-15.19,1-1.77,8.06-18.45,1.2,8.34-41.63L195,24.5,197.6,8.76l31.82-2.07,18.16,55.53ZM217.42,25.05l-3.29,16.73,8.38-.55Z"
                ></path>
                <path
                  class="cls-1"
                  fill={cor.cor7}
                  d="M170.44,24.06l-4.66-.15-.33,10.31,4.67.14a5.15,5.15,0,1,0,.32-10.3Z"
                ></path>
                <path
                  class="cls-1"
                  fill={cor.cor7}
                  d="M120.53,25.33l-3.42.35.77,7.55,3.42-.34a3.8,3.8,0,1,0-.77-7.56Z"
                ></path>
                <path
                  class="cls-1"
                  fill={cor.cor7}
                  d="M123.71,44.41l-4.37.44,1,9.66,4.37-.44a4.85,4.85,0,0,0-1-9.66Z"
                ></path>
                <polygon
                  class="cls-1"
                  fill={cor.cor7}
                  points="222.91 112.03 214.48 142.99 230.28 143.11 222.91 112.03"
                ></polygon>
                <path
                  class="cls-1"
                  fill={cor.cor7}
                  d="M173.24,292.41c15.23,6.14,33.7,10.46,53.4,8.17,45-5.24,39.56-47.53,39.56-47.53l-12.37,1.44c23.22-18.8,10.25-48,10.25-48L173.24,243l-.22-.08V292.5Z"
                ></path>
                <path
                  class="cls-1"
                  fill={cor.cor7}
                  d="M267.49,292.41c-15.23,6.14-33.7,10.46-53.4,8.17-45-5.24-39.56-47.53-39.56-47.53l12.37,1.44c-23.23-18.8-10.25-48-10.25-48L267.49,243l.21-.08V292.5Z"
                ></path>
                <path
                  fill={cor.cor7}
                  class="cls-1"
                  d="M315,250.56a43.69,43.69,0,0,0,5.83-24.17,56.55,56.55,0,0,0-4.08-19.12,5.83,5.83,0,0,0-7.49-3.05l-88.67,35.66-.22-.08v6.29l.22.08,90.84-36.53s13,29.21-10.25,48l12.37-1.44S319,298.5,274,303.74c-19.72,2.29-38.22-2-53.46-8.19l-.16.11v6.27l.22-.08a118.27,118.27,0,0,0,42.52,8.35,100.73,100.73,0,0,0,11.55-.66c15.37-1.79,27.11-7.76,34.9-17.76,12.25-15.71,9.87-35.48,9.76-36.31A5.81,5.81,0,0,0,315,250.56Z"
                ></path>
                <path
                  class="cls-3"
                  fill={cor.cor9}
                  d="M220.58,295.57c15.23,6.14,33.7,10.46,53.4,8.17,45-5.24,39.56-47.53,39.56-47.53l-12.37,1.44c23.22-18.8,10.25-48,10.25-48l-90.84,36.53-.22-.08v49.57Z"
                ></path>
                <path
                  class="cls-1"
                  fill={cor.cor7}
                  d="M125.74,250.56a43.69,43.69,0,0,1-5.83-24.17A56.27,56.27,0,0,1,124,207.27a5.83,5.83,0,0,1,7.49-3.05l88.67,35.66.21-.08v6.29l-.21.08-90.84-36.53s-13,29.21,10.25,48l-12.37-1.44s-5.44,42.29,39.56,47.53c19.72,2.29,38.21-2,53.45-8.19l.16.11v6.27l-.21-.08a118.31,118.31,0,0,1-42.52,8.35,100.6,100.6,0,0,1-11.55-.66c-15.37-1.79-27.11-7.76-34.91-17.76-12.24-15.71-9.87-35.48-9.76-36.31A5.82,5.82,0,0,1,125.74,250.56Z"
                ></path>
                <path
                  class="cls-3"
                  fill={cor.cor9}
                  d="M220.15,295.57c-15.23,6.14-33.7,10.46-53.4,8.17-45-5.24-39.56-47.53-39.56-47.53l12.37,1.44c-23.23-18.8-10.25-48-10.25-48l90.84,36.53.21-.08v49.57Z"
                ></path>
                <polygon
                  class="cls-1"
                  fill={cor.cor7}
                  points="274.72 282.12 285.75 244.39 247.32 235.12 219.94 206.76 192.65 235.19 154.24 244.57 165.38 282.27 154.34 320 192.78 329.26 220.15 357.63 247.45 329.19 285.86 319.82 274.72 282.12"
                ></polygon>
                <polygon
                  class="cls-1"
                  fill={cor.cor7}
                  points="294.63 295.77 283.61 258.49 294.52 221.17 296.45 214.58 289.78 212.97 251.74 203.8 224.65 175.73 219.93 170.84 215.22 175.75 188.21 203.89 150.19 213.16 143.52 214.79 145.47 221.37 156.49 258.66 145.57 295.98 143.65 302.56 150.32 304.17 188.36 313.35 215.45 341.41 220.17 346.3 224.88 341.4 251.89 313.26 289.91 303.98 296.57 302.36 294.63 295.77"
                ></polygon>
                <polygon
                  class="cls-4"
                  fill={cor.cor10}
                  points="276.79 258.5 288.25 219.33 248.35 209.71 219.94 180.28 191.61 209.79 151.74 219.52 163.3 258.65 151.85 297.82 191.74 307.43 220.16 336.87 248.49 307.36 288.36 297.63 276.79 258.5"
                ></polygon>
                <polygon
                  class="cls-5"
                  fill={cor.cor11}
                  points="288.67 219.33 248.78 209.71 220.36 180.28 220.47 258.57 288.67 219.33"
                ></polygon>
                <polygon
                  class="cls-4"
                  fill={cor.cor10}
                  points="220.05 258.57 288.36 297.63 276.79 258.5 288.25 219.33 220.05 258.57 220.05 258.57"
                ></polygon>
                <polygon
                  class="cls-3"
                  fill={cor.cor9}
                  points="220.36 258.57 220.25 180.28 191.92 209.79 152.05 219.52 220.36 258.57 220.36 258.57"
                ></polygon>
                <polygon
                  class="cls-6"
                  fill={cor.cor12}
                  points="220.47 336.87 248.8 307.36 288.67 297.63 220.36 258.57 220.47 336.87"
                ></polygon>
                <polygon
                  class="cls-5"
                  fill={cor.cor11}
                  points="151.85 297.82 220.05 258.57 151.74 219.52 163.3 258.65 151.85 297.82"
                ></polygon>
                <polygon
                  class="cls-4"
                  fill={cor.cor10}
                  points="220.36 258.57 151.85 297.82 191.74 307.43 219.35 336.87 220.36 258.57 220.36 258.57"
                ></polygon>
                <ellipse
                  class="cls-1"
                  fill={cor.cor7}
                  cx="220.05"
                  cy="258.21"
                  rx="48.06"
                  ry="47.97"
                ></ellipse>
                <ellipse
                  class="cls-1"
                  fill={cor.cor7}
                  cx="220.05"
                  cy="258.21"
                  rx="38.56"
                  ry="38.48"
                ></ellipse>
                <path
                  class="cls-5"
                  fill={cor.cor11}
                  d="M172,258.21a50.17,50.17,0,0,0,4.44,18.05,47.65,47.65,0,0,0,4.61,8,48.38,48.38,0,0,0,6,6.94,47.73,47.73,0,0,0,66,0,48.53,48.53,0,0,0,6-6.95,47.12,47.12,0,0,0,4.6-8,50.44,50.44,0,0,0,4.45-18.05,45.8,45.8,0,0,1-2.88,18.7A47.36,47.36,0,0,1,255,293.1l-1.73,1.7c-.6.54-1.19,1.09-1.8,1.62s-1.26,1-1.9,1.52-1.3,1-2,1.42a49,49,0,0,1-8.52,4.69,48.75,48.75,0,0,1-38,0,47.86,47.86,0,0,1-26.18-27.13A45.8,45.8,0,0,1,172,258.21Z"
                ></path>
                <path
                  class="cls-7"
                  fill={cor.cor13}
                  d="M219.86,218.47c-22.13,0-40.07,18.67-40.07,38.28,0,12.91,7.8,23,19.42,28.39v4.53a4.42,4.42,0,0,0,4.41,4.41h32.47a4.42,4.42,0,0,0,4.42-4.42v-4.53c11.62-5.39,19.41-15.47,19.41-28.38C259.92,237.14,242,218.47,219.86,218.47Zm3.23,33.82,5.12-5.11a2.76,2.76,0,1,1,3.91,3.9L227,256.19a2.76,2.76,0,0,1-3.91-3.9Zm-14.75-5.11a2.76,2.76,0,0,1,3.91,0l5.12,5.11a2.76,2.76,0,0,1-2,4.71,2.76,2.76,0,0,1-2-.81l-5.12-5.11A2.75,2.75,0,0,1,208.34,247.18Zm-5.93,29.54a12,12,0,1,1,11.62-12A11.84,11.84,0,0,1,202.41,276.72Zm11.62,2s6.23-10,6.24-10l5.79,10S214,278.78,214,278.76Zm24.56-2a12,12,0,1,1,11.62-12A11.83,11.83,0,0,1,238.59,276.72Z"
                ></path>
                <path
                  class="cls-3"
                  fill={cor.cor9}
                  d="M215.09,228.43c-2.76-4.36-10.36-4.49-17-.31s-9.74,11.1-7,15.45,10.36,4.49,17,.31S217.85,232.78,215.09,228.43Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "20%",
            }}
          >
            <p>Clique nos blocos pretos e escolha as cores para pintar</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "50px",
            }}
          >
            {addInputsRender(1, 6)}
          </div>
          <svg
            width={350}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 731 600.86"
          >
            <defs></defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="bg1">
                <path
                  class="cls-1"
                  fill={cor.cor1}
                  d="M423.79,515.44c-12.92-19.92-17.48-40.54-14.72-58.26s12.84-32.57,29.18-40.92,35.84-8.65,54.49-1.88,36.45,20.62,49.37,40.55,18,41.34,15.76,59.88S546.08,549,529.74,557.34s-36.36,7.84-55.54.26S436.71,535.37,423.79,515.44Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M503.24,571.17a86.78,86.78,0,0,1-31.87-6.41c-21.49-8.5-40.68-24.52-54-45.13s-19-43.26-15.86-63.64c3.22-20.72,15-37.26,33.27-46.59,17.9-9.15,39.42-9.95,60.63-2.25,21,7.64,39.92,23.12,53.2,43.59,13.48,20.78,19.49,43.86,16.94,65-2.65,22-14.11,39.17-32.26,48.46A65.51,65.51,0,0,1,503.24,571.17ZM466.63,417.31a54.38,54.38,0,0,0-24.88,5.8c-13.72,7-22.62,19.54-25.07,35.25-2.59,16.63,2.23,35.41,13.57,52.89,11.63,17.94,28.25,31.86,46.78,39.19,17.93,7.09,35.41,7.1,49.21,0,13.44-6.88,22-19.87,24-36.59,2.12-17.56-3.05-37-14.57-54.77s-27.64-31-45.54-37.5A69,69,0,0,0,466.63,417.31Z"
                ></path>
                <path
                  class="cls-3"
                  fill={cor.cor3}
                  d="M99.61,357.59l-14.85-7.74L69.91,342.1a370.87,370.87,0,0,0-14.38,43c-5.76,22.23-8.69,46,2.67,51.88s29.14-10,44.08-27.49a371,371,0,0,0,27-36.39l-14.85-7.75Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M63.46,446a18.85,18.85,0,0,1-8.82-2.15c-13.21-6.9-15.36-26.73-6.56-60.64a375.26,375.26,0,0,1,14.72-44,7.69,7.69,0,0,1,10.67-3.88l59.4,31a7.7,7.7,0,0,1,2.93,11,374.88,374.88,0,0,1-27.67,37.25C90.1,435.55,75.37,446,63.46,446ZM74,352.89A354.21,354.21,0,0,0,63,387c-7.9,30.43-4.49,41.42-1.23,43.13S76,428.36,96.43,404.47a357.91,357.91,0,0,0,21.71-28.53Z"
                ></path>
                <path
                  class="cls-1"
                  fill={cor.cor1}
                  d="M96.87,297v1.15a41.86,41.86,0,0,0-5.61-16.13A39,39,0,0,0,80,270a44.07,44.07,0,0,0-57.23,6c-12,12.39-15.74,28.93-15,45a101.56,101.56,0,0,0,11.78,42.18c16.47,29.93,48,50.92,82.5,59.82s72.18,5.71,101-12.73l6.19-26.3,6.18-26.31a241.1,241.1,0,0,1-52.69-15.74A205.43,205.43,0,0,1,96.87,297Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M215.42,365.38a8.06,8.06,0,0,1-1.38-.13A246.46,246.46,0,0,1,159.66,349a212.91,212.91,0,0,1-68.3-46.59,7.7,7.7,0,0,1,11-10.76,197.6,197.6,0,0,0,63.39,43.22,231.31,231.31,0,0,0,51,15.23,7.7,7.7,0,0,1-1.37,15.28Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M139.24,435.52a157.08,157.08,0,0,1-39.08-5c-38.76-10-70.59-33.15-87.33-63.57A109.86,109.86,0,0,1,.11,321.38c-1-20.65,4.93-38.19,17.14-50.74a51.79,51.79,0,0,1,67.11-7A47.28,47.28,0,0,1,101,284.26a49.7,49.7,0,0,1,3.24,27.65,7.69,7.69,0,0,1-15.18-2.52,34.48,34.48,0,0,0-2.24-19.12,31.92,31.92,0,0,0-11.18-13.91,36.37,36.37,0,0,0-47.35,5c-11.57,11.89-13.35,27.91-12.8,39.26a93.83,93.83,0,0,0,10.83,38.83c14.71,26.72,43,47.16,77.68,56.09s69.28,4.65,94.89-11.77a7.7,7.7,0,0,1,8.31,13C187.88,429.14,164.26,435.52,139.24,435.52Z"
                ></path>
                <path
                  class="cls-4"
                  fill={cor.cor4}
                  d="M149.25,311.56a70.38,70.38,0,0,0-13.4,20.53c-4.26,9.94-7.75,23.78-8.78,44s1.59,42.22,6,61.08,10.64,34.55,16.81,42c7.72,9.35,17.81,12.65,27,11.94s17.45-5.45,21.53-12.19"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M174.47,498.88c-11.66,0-22.64-5.3-30.51-14.82-6.91-8.36-13.61-24.82-18.38-45.16-5-21.31-7.19-43.76-6.2-63.24,1-18.86,4-34.11,9.4-46.61a77.74,77.74,0,0,1,14.75-22.65A7.7,7.7,0,1,1,155,316.71a62.57,62.57,0,0,0-12,18.41c-4.57,10.65-7.32,24.55-8.17,41.33-.92,18.07,1.14,39,5.82,58.94,4.12,17.57,10,32.46,15.25,38.86,7.26,8.79,15.92,9.52,20.45,9.16,6.63-.52,12.73-3.85,15.55-8.5a7.7,7.7,0,1,1,13.17,8c-5.39,8.89-15.93,15-27.52,15.87C176.47,498.84,175.47,498.88,174.47,498.88Z"
                ></path>
                <path
                  class="cls-3"
                  fill={cor.cor3}
                  d="M175.47,248.32,172.56,262l-2.9,13.63A310.27,310.27,0,0,1,134.46,262c-17.32-8.09-34.09-18.78-31.87-29.21s21.89-13.37,41-13.71a308.66,308.66,0,0,1,37.68,1.95l-2.9,13.63Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M169.66,283.29a7.58,7.58,0,0,1-2.25-.34A314.17,314.17,0,0,1,131.21,269C114,261,91.43,248.27,95.06,231.22c2.73-12.81,18.56-19.29,48.4-19.81a323.91,323.91,0,0,1,38.74,2,7.71,7.71,0,0,1,6.6,9.25L183,249.92h0l-5.8,27.26a7.73,7.73,0,0,1-7.54,6.1Zm-22.2-56.51-3.73,0c-26.34.46-33.19,5.65-33.61,7.61s3.73,9.49,27.6,20.63c9.63,4.5,19.55,8.2,26.2,10.52l8-37.7C165.74,227.36,156.79,226.78,147.46,226.78Zm28,21.54h0Z"
                ></path>
                <path
                  class="cls-3"
                  fill={cor.cor3}
                  d="M453,147.51l11,10,11.05,10a330.12,330.12,0,0,0,22-33.8c9.95-17.86,17.78-37.63,9.32-45.28s-27.34,2.13-44.11,13.81a331.66,331.66,0,0,0-31.43,25.28l11.05,10Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M475.07,175.2a7.67,7.67,0,0,1-5.16-2l-22.11-20h0l-22.1-20a7.7,7.7,0,0,1-.08-11.36,336.08,336.08,0,0,1,32.27-26c25.95-18.08,43.52-22.39,53.68-13.2s7.63,27.11-7.76,54.74a334.21,334.21,0,0,1-22.6,34.69,7.66,7.66,0,0,1-5.42,3A5.79,5.79,0,0,1,475.07,175.2Zm-16.94-33.41L473.86,156c4.33-6.18,10.8-15.85,16.49-26.07,13.39-24,13-33.93,10.89-35.81s-12-1.31-34.55,14.41c-9.6,6.69-18.57,14.1-24.29,19Z"
                ></path>
                <path
                  class="cls-5"
                  fill={cor.cor5}
                  d="M392.25,26.19a36.7,36.7,0,0,0-21.34-3.59,43.49,43.49,0,0,0-20.51,9c-3.3-8.48-8.42-14.95-15-19s-14.73-5.68-24-4.52a41,41,0,0,0-23.51,11.22,52.84,52.84,0,0,0-13.72,23.34,38.45,38.45,0,0,0-20.46-4,33.63,33.63,0,0,0-18.48,7.67c-10.12,8.41-15.39,21-14.75,34.89s7.2,29.13,20.73,42.8l77.07-10.81,77.07-10.82c11.87-16.62,17-32.77,16.23-46.21S404.06,32,392.25,26.19Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M241.17,131.69a7.7,7.7,0,0,1-5.48-2.29c-14-14.17-22.16-31.17-22.94-47.85-.75-16.29,5.63-31.3,17.53-41.17A41.35,41.35,0,0,1,253,31a44.67,44.67,0,0,1,16.62,1.67,58.16,58.16,0,0,1,12.95-18.91A48.85,48.85,0,0,1,310.4.42c10.76-1.36,20.78.59,29,5.6a42.65,42.65,0,0,1,14.1,14.4A48,48,0,0,1,369.86,15a44.16,44.16,0,0,1,25.77,4.31h0c14.26,7,22.64,19.92,23.6,36.42.92,16-5.18,33.67-17.66,51.14a7.68,7.68,0,0,1-5.19,3.15L242.24,131.61A7.82,7.82,0,0,1,241.17,131.69Zm15.72-85.51c-.84,0-1.68,0-2.51.12a25.93,25.93,0,0,0-14.27,5.93c-8.26,6.85-12.51,17-12,28.61.54,11.85,6.16,24.15,15.9,35L390.9,95.21c9-13.5,13.62-27.12,13-38.61-.63-10.88-5.81-19-15-23.49A28.88,28.88,0,0,0,372,30.23a35.67,35.67,0,0,0-16.86,7.46,7.7,7.7,0,0,1-11.86-3.32c-2.69-6.91-6.69-12-11.89-15.22s-11.65-4.37-19-3.45a33.13,33.13,0,0,0-19.14,9.14,45.18,45.18,0,0,0-11.66,20,7.69,7.69,0,0,1-10.77,4.73A31.67,31.67,0,0,0,256.89,46.18Z"
                ></path>
                <path
                  class="cls-1"
                  fill={cor.cor1}
                  d="M385.46,510.27c-11.89,2.08-49.19,11-84.42,18.42s-68.37,13.43-71.94,9.69c-26.67-27.87-48.5-65.25-64-106.84a415.38,415.38,0,0,1-25.7-132.12c-1.84-70.77,19.67-121.69,52.29-156.77S268.05,88.32,310.6,80.9s91.12-3.2,134.14,19.22,80.5,63.06,100.87,128.49c10.68,34.29,16.69,71.29,18.62,107.72s-.22,72.33-5.85,104.4c-1.54,8.78-38.83,25.13-78.7,39.8S397.35,508.2,385.46,510.27Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M234.61,547.27c-7.67,0-9.32-1.72-11.08-3.56-26.66-27.87-49.34-65.73-65.61-109.49a423,423,0,0,1-26.18-134.6c-1.74-67,16.54-121.55,54.35-162.21,39.07-42,88.55-58.06,123.18-64.09,48.66-8.49,98-1.39,139,20C497.69,119,533.88,165,553,226.32c10.51,33.76,16.89,70.64,19,109.61,1.92,36.29-.14,73-6,106.13-1,5.58-2.8,16-83.62,45.7-40.91,15.05-83.19,27.94-95.56,30.1-6.14,1.07-20,4.18-36,7.78-14.61,3.28-31.59,7.09-48.11,10.58C262.91,544.61,244.13,547.27,234.61,547.27Zm-1.14-15.46c4,.36,17.8-.48,66-10.66,16.46-3.48,33.37-7.27,47.93-10.54,16.9-3.79,30.25-6.79,36.76-7.92h0c11.69-2,53.9-15,92.88-29.38,52.49-19.32,71-30.66,73.89-34.57,5.53-31.83,7.48-67.09,5.63-102-2-37.16-8.29-73.76-18.28-105.85C520.17,172.8,487.51,131.1,441.18,107c-38-19.81-83.92-26.37-129.26-18.46-32.3,5.63-78.4,20.51-114.56,59.4-35,37.62-51.86,88.53-50.22,151.33a407.1,407.1,0,0,0,25.22,129.64C187.65,470,208.77,505.57,233.47,531.81Z"
                ></path>
                <path
                  class="cls-6"
                  fill={cor.cor6}
                  d="M372.89,487.32a23.94,23.94,0,0,0,11-6.89A25.42,25.42,0,0,0,389.58,470s24.61-5,58.34-19.84,76.57-39.37,113-78.43A222.92,222.92,0,0,1,562.24,396c.08,14.6-1,34.13-5.57,53.85A156,156,0,0,1,540.79,474c-10.41,13.21-25.76,28.65-45.52,37.53a175.07,175.07,0,0,1-33.67,10.77,274.54,274.54,0,0,1-30.26,4.84,89.68,89.68,0,0,1-14,.32A125.68,125.68,0,0,1,403.41,526c-9.9-1.62-22.14-.58-33.24,2.62s-21.09,8.54-26.48,15.55l-50,9.66-50,9.66c-15.8-16.11-28.28-34.1-36.82-48.07a260.13,260.13,0,0,1-13.11-23.9c29.65,2.9,68.21.11,99.36-3.4S348,480.33,348,480.33c2.54,2.92,6.72,5.28,11.29,6.61A24.89,24.89,0,0,0,372.89,487.32Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M243.67,571.14a7.69,7.69,0,0,1-5.5-2.3c-16.82-17.16-29.89-36.37-37.89-49.45a267,267,0,0,1-13.54-24.7,7.7,7.7,0,0,1,7.75-10.89c23.72,2.32,57.52,1.16,97.74-3.38,30.51-3.43,54.15-7.63,54.38-7.67a7.74,7.74,0,0,1,7.17,2.53c1.47,1.69,4.39,3.33,7.62,4.26a17.45,17.45,0,0,0,9.28.4h0a16.3,16.3,0,0,0,7.5-4.69,17.79,17.79,0,0,0,4-7.29,7.71,7.71,0,0,1,5.89-5.53c.24-.05,24.31-5.1,56.79-19.35,30.11-13.21,73.72-37.24,110.49-76.63a7.7,7.7,0,0,1,13.27,4.29,232.31,232.31,0,0,1,1.35,25.19c.07,13.73-.88,34.54-5.77,55.63a7.81,7.81,0,0,1-.6,1.7,164.41,164.41,0,0,1-16.74,25.53c-10,12.73-26.57,30-48.4,39.78a182.25,182.25,0,0,1-35.17,11.27,279.9,279.9,0,0,1-31.12,5,97.42,97.42,0,0,1-15.18.35,132.5,132.5,0,0,1-14.8-1.62c-8.57-1.4-19.73-.5-29.87,2.41-10.3,3-18.5,7.65-22.5,12.85a7.69,7.69,0,0,1-4.64,2.87L245.13,571A7.29,7.29,0,0,1,243.67,571.14Zm-36.8-71.06c1.81,3.28,4,7.1,6.55,11.28a272.67,272.67,0,0,0,32.9,43.73l93.25-18c6.29-6.8,16.26-12.39,28.47-15.9,12.39-3.57,25.74-4.6,36.61-2.82a118.72,118.72,0,0,0,13.08,1.45,84.28,84.28,0,0,0,12.81-.3,263.73,263.73,0,0,0,29.4-4.7,167,167,0,0,0,32.18-10.27c19-8.54,33.65-23.89,42.62-35.27a155.76,155.76,0,0,0,14.65-22.12c4.37-19.32,5.21-38.43,5.15-51.14,0-2.39-.06-4.65-.12-6.75-35.67,34.09-75.22,55.56-103.4,67.93a350.22,350.22,0,0,1-55.6,19.35,33.19,33.19,0,0,1-5.85,9.09,32,32,0,0,1-14.48,9.08h0a32.35,32.35,0,0,1-18-.37,34.38,34.38,0,0,1-11.6-5.77c-8,1.33-27.72,4.48-51.56,7.17C259.36,499.63,230.14,501.1,206.87,500.08Z"
                ></path>
                <path
                  class="cls-7"
                  fill={cor.cor7}
                  d="M179.7,249.35c4.47-25,13-49.34,26.15-70.84,15.9-26.62,35.07-43.55,33-46.45-1-1.34-7.41,1.12-16,7.85s-19.14,17.76-27.81,32c-14.14,23.08-23.11,48.92-27.82,75.26A161,161,0,0,0,165.05,289c1,10.71,3,17.17,4.7,17.08C173.48,305.89,174.12,280.07,179.7,249.35Z"
                ></path>
                <path
                  class="cls-7"
                  fill={cor.cor7}
                  d="M481.86,205.64c-13.24-26.94-32.26-51.32-56.11-69.89a136.7,136.7,0,0,0-41.46-22.53c-11.55-3.71-19.14-4.06-19.61-2.44-1,3.48,26.08,13.39,53.24,35,22.25,17.33,40.05,40.11,52.54,65.5,7.7,15.64,13.28,30.39,17.44,41.35s7.36,17.58,9.13,17.16,1.63-7.87-.49-19.62A167,167,0,0,0,481.86,205.64Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M363.37,266.43c-6.05-4.81-13.62-6.15-21.16-5.14a44.39,44.39,0,0,0-20.89,8.95,9.11,9.11,0,0,1-8.44,1.47,44.51,44.51,0,0,0-22.69-1.34c-7.43,1.6-14.1,5.42-18.17,12a26.94,26.94,0,0,0-3.41,18.45,31.2,31.2,0,0,0,9.14,17.49,41.06,41.06,0,0,0,16.64,9.4,66.46,66.46,0,0,0,19.32,2.71c2.37,0,4.71-.11,7-.31s4.47-.49,6.57-.85a77.13,77.13,0,0,0,24.36-8.62c7.79-4.45,14.61-10.54,18.52-18.44a31.18,31.18,0,0,0,2.68-19.56A26.86,26.86,0,0,0,363.37,266.43Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M234,257.53a7.7,7.7,0,0,1-4.78-13.74,37.6,37.6,0,0,1,29.42-7.72c8.26,1.2,15.48,4.76,19,7.75a7.7,7.7,0,0,1-10,11.69c-1.13-1-5.51-3.38-11.15-4.2a22.28,22.28,0,0,0-17.66,4.56A7.65,7.65,0,0,1,234,257.53Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M351.81,243.55A7.71,7.71,0,0,1,345.12,232c2.27-4,7.86-9.79,15.22-13.71a37.65,37.65,0,0,1,30.3-2.69,7.7,7.7,0,1,1-4.9,14.6,22.28,22.28,0,0,0-18.16,1.68c-5,2.68-8.34,6.43-9.07,7.73A7.71,7.71,0,0,1,351.81,243.55Z"
                ></path>
                <path
                  class="cls-4"
                  fill={cor.cor4}
                  d="M579.29,419.48c6.1-1.36,14.19-5.33,21-10.71s12.25-12.16,13.09-19.16c.79-6.59-1.45-9.12-6-18.66s-11.46-26.08-20-60.69c-.61-2.48-4.49-23.18-12-41.19s-18.64-33.35-33.75-25.1c-11.27,6.16-22.69,18.17-30,36s-10.5,41.56-5.33,71.11,17.58,47.95,31.61,58.32S567.61,422.11,579.29,419.48Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M570,428.18c-12.52,0-25.63-4.4-36.69-12.57C521,406.49,505,388.12,498.73,352.43c-4.91-28.05-2.91-54.1,5.78-75.35,7.34-17.95,19.22-32.11,33.43-39.87,6.37-3.47,13-4.15,19.26-2,9.8,3.44,18.07,13.54,25.28,30.86,6.82,16.35,10.73,34.7,12,40.72l.35,1.59c8.43,34.29,15.13,50.21,19.43,59.21.85,1.77,1.62,3.29,2.29,4.64,3.1,6.17,5.34,10.62,4.43,18.26-1.28,10.62-9.38,19.06-16,24.27-7.37,5.84-16.59,10.52-24.07,12.2h0A50.46,50.46,0,0,1,570,428.18Zm-20.16-178.8a9.43,9.43,0,0,0-4.55,1.35c-11,6-20.64,17.71-26.56,32.18-7.59,18.56-9.27,41.68-4.86,66.86,4.25,24.29,14.13,42.77,28.59,53.46,10.81,8,23.94,11.25,35.12,8.74h0c5.27-1.18,12.29-4.81,17.87-9.23,6-4.76,9.73-9.88,10.23-14.05.34-2.86,0-3.76-2.89-9.51-.72-1.42-1.53-3-2.43-4.91-4.6-9.6-11.73-26.5-20.5-62.17-.09-.36-.24-1.06-.45-2.05-1.21-5.68-4.91-23-11.17-38-7-16.89-13.16-21.19-16.18-22.25A6.38,6.38,0,0,0,549.87,249.38Z"
                ></path>
                <path
                  class="cls-7"
                  fill={cor.cor7}
                  d="M349.84,418.91l-5-19.72c-1.59-6.59-2.91-13.24-4.38-19.86-3.52-16.26-9.17-28.9-12.62-28.23s-3.34,14.54.22,31c1.48,6.67,2.82,13.38,4.42,20l5,19.89c4.11,16.3,10.18,28.76,13.56,27.84S353.91,435.06,349.84,418.91Z"
                ></path>
                <path
                  class="cls-7"
                  fill={cor.cor7}
                  d="M312.2,204.36c-1-16.55-1.57-33.13-1.41-49.65.1-20.3-1-36.69-4.38-37.17-3.59-.52-8.23,16.25-8.32,37-.16,16.9.4,33.76,1.43,50.56,1.26,20.69,5.94,37.05,9.39,36.67S313.44,224.68,312.2,204.36Z"
                ></path>
                <path
                  class="cls-3"
                  fill={cor.cor3}
                  d="M628.84,288.73l11.61.42,11.62.42a258.84,258.84,0,0,0-3.83-31.21c-3-15.65-8.27-31.38-17.16-31.7s-15.25,15-19.39,30.38a256.52,256.52,0,0,0-6.07,30.86l11.61.42Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M652.07,297.27h-.28l-46.45-1.68A7.68,7.68,0,0,1,598,287,260.83,260.83,0,0,1,604.25,255C608.5,239.28,616,218.33,631.36,219s21.34,21.91,24.44,37.93a264.79,264.79,0,0,1,4,32.28,7.71,7.71,0,0,1-7.69,8.09Zm-37.55-16.76,14.6.53h0l14.6.53c-.55-5.77-1.5-13.79-3-21.75-4.45-23-9.85-25.45-9.91-25.47s-5.56,2.08-11.65,24.69C617,266.89,615.48,274.81,614.52,280.51Z"
                ></path>
                <path
                  class="cls-1"
                  fill={cor.cor1}
                  d="M539.42,314.66c.09-8,1.08-16.06,3.64-23s6.72-12.62,13.11-15.95c24.25-12.64,53.44-19.5,81.12-17.87s53.85,11.76,72,33.09a61.8,61.8,0,0,1,13.14,29.23c1.95,11.66.67,24.48-6.17,36.21-9.62,16.49-24.68,22.11-42,21.88s-37-6.28-55.81-13.13c-9.75-3.56-19.83-7-29.66-9.7a150.48,150.48,0,0,0-28.22-5.34c-8.05-.6-13.36-7.21-16.64-14.8A56.67,56.67,0,0,1,539.42,314.66Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M675.23,386h-1.07c-19.2-.25-40.27-7-58.34-13.6-11.51-4.19-20.75-7.21-29.08-9.5A141.7,141.7,0,0,0,560,357.8c-6.94-.51-16.59-4.3-23.14-19.4a64.55,64.55,0,0,1-5.14-23.82c.11-9.89,1.5-18.49,4.13-25.56,3.48-9.35,9.12-16.11,16.76-20.09,26.4-13.75,56.63-20.4,85.13-18.73,32.33,1.91,59.11,14.28,77.45,35.79,7.41,8.69,12.84,20.7,14.88,33,2.47,14.83,0,29.13-7.12,41.35C713,377.36,696.94,386,675.23,386Zm-46-120.65a154.21,154.21,0,0,0-69.55,17.22c-4.22,2.2-7.31,6.07-9.45,11.81-2,5.4-3.07,12.25-3.16,20.36h0A49.18,49.18,0,0,0,551,332.27c1.93,4.44,5.25,9.81,10.15,10.18a156,156,0,0,1,29.69,5.6c8.74,2.4,18.35,5.55,30.26,9.89,16.86,6.14,36.37,12.45,53.27,12.66,16.63.26,28-5.52,35.29-18.06,6.69-11.47,6.53-23.22,5.23-31.06-1.58-9.44-5.84-19-11.41-25.5-19.64-23-47.08-29.25-66.64-30.4Q633.1,265.36,629.28,265.36Zm-89.86,49.3h0Z"
                ></path>
                <path
                  class="cls-1"
                  fill={cor.cor1}
                  d="M330,484.25c13.29,18.82,18.41,39,16.27,56.84s-11.53,33.42-27.25,43-34.82,11.41-53.29,6.13-36.34-17.68-49.63-36.5S197.17,514,198.77,495.36s10.45-34.93,26.18-44.53,35.35-10.65,54.36-4.6S316.73,465.42,330,484.25Z"
                ></path>
                <path
                  class="cls-2"
                  fill={cor.cor2}
                  d="M286.1,600.86a81.71,81.71,0,0,1-22.48-3.23c-21-6-40.07-20-53.8-39.45-13.9-19.69-20.55-42.23-18.72-63.48,1.88-21.94,12.48-39.85,29.84-50.44,17.14-10.45,38.7-12.36,60.7-5.37,21.44,6.82,40.85,21.35,54.66,40.91h0c13.81,19.58,20.07,41.67,17.62,62.21-2.49,20.74-13.46,38-30.89,48.67A70.56,70.56,0,0,1,286.1,600.86ZM256,450.16a51.36,51.36,0,0,0-27,7.25c-13.07,8-21.07,21.68-22.52,38.61-1.51,17.63,4.15,36.55,16,53.27s27.85,28.5,45.46,33.54c16.88,4.83,33.64,2.95,47.16-5.3,13.32-8.13,21.71-21.39,23.62-37.35,2-16.75-3.3-35-14.92-51.49-11.89-16.84-28.49-29.32-46.74-35.13A69.69,69.69,0,0,0,256,450.16Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </header>
    </div>
  );
}

export default App;
