import React from "react";
import data from "./data.json";
import reactionImg from "./assets/images/icon-reaction.svg";
import memoryImg from "./assets/images/icon-memory.svg";
import verbalImg from "./assets/images/icon-verbal.svg";
import visualImg from "./assets/images/icon-visual.svg";

function Summary() {
  return (
    <section className="summary">
      <h3>Summary</h3>
      <div className="scores-data red">
        <span>
          <img src={reactionImg} alt="icon" />
          <span className="category">{data[0].category}</span>

          <span className="score">
            {data[0].score}
            <span className="out-of"> / 100</span>
          </span>
        </span>
      </div>
      <div className="scores-data yellow">
        <span>
          <img src={memoryImg} alt="icon" />
          <span className="category">{data[1].category}</span>

          <span className="score">
            {data[1].score}
            <span className="out-of"> / 100</span>
          </span>
        </span>
      </div>
      <div className="scores-data green">
        <span>
          <img src={verbalImg} alt="icon" />
          <span className="category">{data[2].category}</span>

          <span className="score">
            {data[2].score}
            <span className="out-of"> / 100</span>
          </span>
        </span>
      </div>
      <div className="scores-data blue">
        <span>
          <img src={visualImg} alt="icon" />
          <span className="category">{data[3].category}</span>

          <span className="score">
            {data[3].score}
            <span className="out-of"> / 100</span>
          </span>
        </span>
      </div>
      <button>Continue</button>
    </section>
  );
}

export default Summary;
