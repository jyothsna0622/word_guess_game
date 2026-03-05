import React from "react";
import "../theme.css";

function Home(){

  const selectLevel=(level)=>{
    localStorage.setItem("level",level);
    window.location.href="/game";
  };

  return(

    <div className="page-container">

      <h1 className="main-title">
        Word Guess Game
      </h1>

      <div className="card">

        <div className="button-group">

          <button
            className="btn easy"
            onClick={()=>selectLevel("easy")}
          >
            Easy
          </button>

          <button
            className="btn medium"
            onClick={()=>selectLevel("medium")}
          >
            Medium
          </button>

          <button
            className="btn hard"
            onClick={()=>selectLevel("hard")}
          >
            Hard
          </button>

        </div>

      </div>

    </div>

  );
}

export default Home;