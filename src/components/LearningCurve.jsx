const LearningCurve = () => {
  const color1 = "#000000";
  const img = (
    <svg
      width="100%"
      viewBox="0 0 1222 608"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Group-4">
          <path
            d="M0,603 C199.067721,603 373.850149,498.059004 473,340"
            id="Path"
            stroke="#444444"
            stroke-width="6"
          ></path>
          <path
            d="M527,266 C726.067721,266 900.850149,161.059004 1000,3"
            id="Path"
            stroke="#444444"
            stroke-width="6"
            transform="translate(763.500000, 134.500000) scale(-1, -1) translate(-763.500000, -134.500000) "
          ></path>
          <line
            x1="471.54902"
            y1="341.472603"
            x2="526.45098"
            y2="265.527397"
            id="Line-10"
            stroke="#444444"
            stroke-width="6"
            stroke-linecap="square"
          ></line>
          <ellipse
            id="Oval"
            stroke="#389E06"
            stroke-width="3"
            cx="153"
            cy="583.5"
            rx="23.5"
            ry="23"
          ></ellipse>
          <ellipse
            id="Oval"
            stroke="#389E06"
            stroke-width="3"
            cx="609"
            cy="163.5"
            rx="23.5"
            ry="23"
          ></ellipse>
          <ellipse
            id="Oval"
            stroke="#389E06"
            stroke-width="3"
            cx="498"
            cy="300.5"
            rx="23.5"
            ry="23"
          ></ellipse>
          <ellipse
            id="Oval"
            stroke="#389E06"
            stroke-width="3"
            cx="401"
            cy="434.5"
            rx="23.5"
            ry="23"
          ></ellipse>
          <ellipse
            id="Oval"
            stroke="#389E06"
            stroke-width="3"
            cx="844"
            cy="24.5"
            rx="23.5"
            ry="23"
          ></ellipse>
          <g
            id="Line-13"
            transform="translate(178.000000, 583.000000)"
            stroke="#389E06"
            stroke-linecap="square"
            stroke-width="2"
          >
            <line
              x1="0.930357143"
              y1="0.9"
              x2="1042"
              y2="0"
              id="Line-12"
            ></line>
          </g>
          <g
            id="Line-13"
            transform="translate(823.000000, 437.500000) scale(1, -1) translate(-823.000000, -437.500000) translate(426.000000, 434.000000)"
            stroke="#389E06"
            stroke-linecap="square"
            stroke-width="2"
          >
            <line x1="0.708928571" y1="6.3" x2="794" y2="0" id="Line-12"></line>
          </g>
          <g
            id="Line-13"
            transform="translate(871.500000, 304.500000) scale(1, -1) translate(-871.500000, -304.500000) translate(523.000000, 304.000000)"
            stroke="#389E06"
            stroke-linecap="square"
            stroke-width="2"
          >
            <line x1="0.622321429" y1="0.9" x2="697" y2="0" id="Line-12"></line>
          </g>
          <g
            id="Line-13"
            transform="translate(927.000000, 165.500000) scale(1, -1) translate(-927.000000, -165.500000) translate(634.000000, 165.000000)"
            stroke="#389E06"
            stroke-linecap="square"
            stroke-width="2"
          >
            <line x1="0.523214286" y1="0.9" x2="586" y2="0" id="Line-12"></line>
          </g>
          <g
            id="Line-13"
            transform="translate(1044.500000, 25.000000) scale(1, -1) translate(-1044.500000, -25.000000) translate(869.000000, 24.000000)"
            stroke="#389E06"
            stroke-linecap="square"
            stroke-width="2"
          >
            <line x1="0.327178467" y1="1.3" x2="351" y2="1" id="Line-12"></line>
          </g>
          <line
            x1="297.5"
            y1="15.5"
            x2="297.5"
            y2="15.5"
            id="Line-11"
            stroke="#979797"
            stroke-linecap="square"
          ></line>
        </g>
      </g>
    </svg>
  );

  return (
    <>
      <div className="learning-curve">
        <div className="y-axis-label">ability</div>
        <div className="curve-box">
          <div className="curve-axes">{img}</div>
          <div className="curve-labels">
            <div></div>
            <div>authority</div>
            <div>expert</div>
            <div>proficient</div>
            <div>capable</div>
            <div>novice</div>
          </div>
        </div>
        <div className="x-axis-label">time</div>
      </div>
    </>
  );
};

export default LearningCurve;
