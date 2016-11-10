import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tictactoe: [
        {draw: false, isitXorO: "", id: 1},
        {draw: false, isitXorO: "", id: 2},
        {draw: false, isitXorO: "", id: 3},
        {draw: false, isitXorO: "", id: 4},
        {draw: false, isitXorO: "", id: 5},
        {draw: false, isitXorO: "", id: 6},
        {draw: false, isitXorO: "", id: 7},
        {draw: false, isitXorO: "", id: 8},
        {draw: false, isitXorO: "", id: 9},
      ],
      isitPlayer1: false,
      gamecomplete: false,
      isthereawinner: false,
      score:{player1: 0, player2: 0, ties: 0}
    }
  this.handleClick = this.handleClick.bind(this);
  this.gameComplete = this.gameComplete.bind(this);
  this.newGamehandleClick = this.newGamehandleClick.bind(this);
  this.handleClearScore = this.handleClearScore.bind(this);

  }
  handleClick(i){
    let clickComplete = this.state.tictactoe;
    let isitPlayer1 = this.state.isitPlayer1;
    let gameComplete = this.state.gamecomplete;
    isitPlayer1 = !isitPlayer1;
    if (clickComplete[i].draw === false && gameComplete === false) {
      clickComplete[i].draw = !clickComplete[i].draw
      if (isitPlayer1 === true) {
      clickComplete[i].isitXorO = "X";
    } else {
      clickComplete[i].isitXorO = "O";
      }
    };   
    this.setState({
      tictactoe: clickComplete,
      isitPlayer1: isitPlayer1
    })
    // console.log(isitPlayer1)
  }

  newGamehandleClick(){
    let newGame = this.state.tictactoe;
    // console.log(newGame)
    this.setState({
      tictactoe: [
        {draw: false, isitXorO: "", id: 1},
        {draw: false, isitXorO: "", id: 2},
        {draw: false, isitXorO: "", id: 3},
        {draw: false, isitXorO: "", id: 4},
        {draw: false, isitXorO: "", id: 5},
        {draw: false, isitXorO: "", id: 6},
        {draw: false, isitXorO: "", id: 7},
        {draw: false, isitXorO: "", id: 8},
        {draw: false, isitXorO: "", id: 9},
      ],
       isitPlayer1: false,
      gamecomplete: false,
      isthereawinner: false

    })

  }

  handleClearScore() {
    let clearedscore = this.state.tictactoe; 
    this.setState({
      tictactoe: [
        {draw: false, isitXorO: "", id: 1},
        {draw: false, isitXorO: "", id: 2},
        {draw: false, isitXorO: "", id: 3},
        {draw: false, isitXorO: "", id: 4},
        {draw: false, isitXorO: "", id: 5},
        {draw: false, isitXorO: "", id: 6},
        {draw: false, isitXorO: "", id: 7},
        {draw: false, isitXorO: "", id: 8},
        {draw: false, isitXorO: "", id: 9},
      ],
      isitPlayer1: false,
      gamecomplete: false,
      isthereawinner: "",
      score:{player1: 0, player2: 0 , ties: 0}
    })
  }

  componentDidUpdate() {
    if (this.state.gamecomplete != true) {
      this.gameComplete();
      this.didSomeoneWin();
    }
  }

  gameComplete(){
    let boardfull = true;
    for (let i = 0; i < this.state.tictactoe.length; i++){
        if (this.state.tictactoe[i].draw === false){
          boardfull = false;
        } 
    }
    if (boardfull === true) {
        this.setState({
        gamecomplete: boardfull
      }, this.didSomeoneWin)
    }
  }

  didSomeoneWin() {
    let isthereawinner = this.state.isthereawinner;
    var whoWon = "";
    let tiecount = this.state.score.ties;
    console.log("start" + tiecount)
    let player1 = this.state.score.player1;
    let player2 = this.state.score.player2;
    if ((this.state.tictactoe[0].isitXorO === this.state.tictactoe[1].isitXorO) && (this.state.tictactoe[0].isitXorO === this.state.tictactoe[2].isitXorO) && this.state.tictactoe[0].draw === true) {
      isthereawinner = true
    } else if ((this.state.tictactoe[0].isitXorO === this.state.tictactoe[3].isitXorO) && (this.state.tictactoe[0].isitXorO === this.state.tictactoe[6].isitXorO) && this.state.tictactoe[0].draw === true) {
      isthereawinner = true
    } else if ((this.state.tictactoe[0].isitXorO === this.state.tictactoe[4].isitXorO) && (this.state.tictactoe[0].isitXorO === this.state.tictactoe[8].isitXorO) && this.state.tictactoe[0].draw === true) {
      isthereawinner = true
    } else if ((this.state.tictactoe[3].isitXorO === this.state.tictactoe[4].isitXorO) && (this.state.tictactoe[3].isitXorO === this.state.tictactoe[5].isitXorO) && this.state.tictactoe[3].draw === true) {
      isthereawinner = true
    } else if ((this.state.tictactoe[6].isitXorO === this.state.tictactoe[7].isitXorO) && (this.state.tictactoe[6].isitXorO === this.state.tictactoe[8].isitXorO) && this.state.tictactoe[6].draw === true) {
      isthereawinner = true
    } else if ((this.state.tictactoe[1].isitXorO === this.state.tictactoe[4].isitXorO) && (this.state.tictactoe[1].isitXorO === this.state.tictactoe[7].isitXorO) && this.state.tictactoe[7].draw === true) {
      isthereawinner = true
    } else if ((this.state.tictactoe[2].isitXorO === this.state.tictactoe[5].isitXorO) && (this.state.tictactoe[2].isitXorO === this.state.tictactoe[8].isitXorO) && this.state.tictactoe[2].draw === true) {
      isthereawinner = true
    } else if ((this.state.tictactoe[2].isitXorO === this.state.tictactoe[4].isitXorO) && (this.state.tictactoe[2].isitXorO === this.state.tictactoe[6].isitXorO) && this.state.tictactoe[2].draw === true) {
      isthereawinner = true
    }
    whoWon = ""
    console.log("Checking if there's a winner: " + isthereawinner);
    console.log("Checking if the game is complete: " + this.state.gamecomplete);
    if (isthereawinner === true) {
      // console.log("I'm in the if statement.");
      if (this.state.isitPlayer1 === true) {
        whoWon = "Player 1 won";
        player1 = player1 + 1;
      } else {
        whoWon = "Player 2 won";
        player2 = player2 + 1;
      }
      this.setState ({
      gamecomplete: isthereawinner,
      isthereawinner: whoWon,
      score: {player1, player2, ties: tiecount}
      })
    } else if (isthereawinner === false && this.state.gamecomplete === true) {
      // console.log("I'm in the else if.")
        tiecount = tiecount + 1;
        console.log("end" + tiecount)
      this.setState ({
        score: {player1, player2, ties: tiecount}
      })
      // console.log(this.state.score.ties);
    }
  }

  render() {
    const tictactoes = this.state.tictactoe
    let tictactoestate = ""
    const isitPlayer1 = this.state.isitPlayer1;
    const tictactoeBoxes = tictactoes.map((box, i) => {
      if (box.draw === true && box.isitXorO === "X") {
        tictactoestate = "tictactoeBoxActive";
        return (<div 
          onClick = {this.handleClick.bind(this, i)} 
          className = {tictactoestate}>
            {this.state.tictactoe[i].isitXorO}
          </div>)
      } else if (box.draw === true && box.isitXorO === "O"){
        tictactoestate = "tictactoeBoxActiveO";
        return (<div 
          onClick = {this.handleClick.bind(this, i)} 
          className = {tictactoestate}>
            {this.state.tictactoe[i].isitXorO}
          </div>)
      }
       else if (box.draw === false) {
        tictactoestate = "tictactoeBox";
        return (<div 
          onClick = {this.handleClick.bind(this, i)} 
          className = {tictactoestate} >
        </div>)
        }
    });


    return (
      <div className="tictactoeContainer">

      {tictactoeBoxes}

        <p>GAME COMPLETE: {this.state.gamecomplete == true ? "TRUE" : "FALSE"}</p>
        <p>{this.state.isthereawinner} </p>
        <div className = "buttonIcons">
          <button type="button" className="btn btn-warning" onClick = {this.newGamehandleClick}>New Game</button>
        
          <button type="button" className="btn btn-success" onClick = {this.handleClearScore}>Clear Score</button>
        </div>
        <p className = "scoreBoard">Player 1 = {this.state.score.player1} | Ties: {this.state.score.ties} | Player 2 = {this.state.score.player2}  </p>
        
      </div>
    );
  }
}

export default App;
