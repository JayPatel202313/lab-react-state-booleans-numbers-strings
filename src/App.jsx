import React from 'react';
import './App.css';
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [incre, setIncre] = useState(1);

  const [showscore, setShowScore] = useState(true);
  const [showincre, setShowIncre] = useState(true);

  const [show, setShow] = useState(false);


  const clickOne = () => {
    setScore(prevScore => prevScore + incre);

    if (score + incre >= 100) {
      setShow(true);
      setShowScore(false);
      setShowIncre(false);
    }
  }

  const increOne = () => {

    if (score >= 10) {
      setIncre(prevIncre => prevIncre + 1);
      setScore(prevScore => prevScore - 10);


    } else {
      alert("You can't afford that!");
    }

  }



  const playAgain = () => {
    setScore(0);
    setIncre(1);
    setShow(false);
    setShowScore(true);
    setShowIncre(true);
  }

  return (


    <div className="top">
      <p className="display">Current Score: {score}</p>
      <br />
      {
        showscore ? <button onClick={clickOne}> +{incre}</button> : null
      }
      <br />
      <br />
      {
        showincre ? <button onClick={increOne}> Pay 10 points to change from +{incre} to +{incre + 1}</button> : null
      }
      {
        show ? <h2 className="endHeading"> You Win!</h2> : null
      }
      {
        show ? <button className="butAgain" onClick={playAgain}>Play again?</button> : null
      }

    </div>

  );
}

export default App;
