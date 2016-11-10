import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tictactoe: [
        {draw : false, isitXorO: "", id: 1},
        {draw : false, isitXorO: "", id: 2},
        {draw : false, isitXorO: "", id: 3},
        {draw : false, isitXorO: "", id: 4},
        {draw : false, isitXorO: "", id: 5},
        {draw : false, isitXorO: "", id: 6},
        {draw : false, isitXorO: "", id: 7},
        {draw : false, isitXorO: "", id: 8},
        {draw : false, isitXorO: "", id: 9},
      ],
      isitPlayer1: false,
      gamecomplete: false,
      isthereawinner: ""
    }
  this.handleClick = this.handleClick.bind(this);
  this.gameComplete = this.gameComplete.bind(this);
  this.newGamehandleClick = this.newGamehandleClick.bind(this);

  }
  handleClick(i){
    // console.log('draws')
    // console.log(i);
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
    console.log(isitPlayer1)
  }

  newGamehandleClick(){
    let newGame = this.state.tictactoe;
    console.log(newGame)
    this.setState({
      tictactoe: [
        {draw : false, isitXorO: "", id: 1},
        {draw : false, isitXorO: "", id: 2},
        {draw : false, isitXorO: "", id: 3},
        {draw : false, isitXorO: "", id: 4},
        {draw : false, isitXorO: "", id: 5},
        {draw : false, isitXorO: "", id: 6},
        {draw : false, isitXorO: "", id: 7},
        {draw : false, isitXorO: "", id: 8},
        {draw : false, isitXorO: "", id: 9},
      ],
       isitPlayer1: false,
      gamecomplete: false,
      isthereawinner: ""
    })

  }

  componentDidUpdate() {
    if (this.state.gamecomplete != true) {
      this.gameComplete();
      this.didSomeoneWin();
    }
  }

  gameComplete(){
    // console.log("Checking if game is done");
    let boardfull = true;
    for (let i = 0; i < this.state.tictactoe.length; i++){
      if (this.state.tictactoe[i].draw === false){
        boardfull = false;
      } 
    }
    if (boardfull === true) {
      this.setState({
      gamecomplete: boardfull
    })
    // console.log('game is done')
    }
  }

  didSomeoneWin() {
    let isthereawinner = this.state.isthereawinner;
    var whoWon = ""
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
    } else if ((this.state.tictactoe[1].isitXorO === this.state.tictactoe[4].isitXorO) && (this.state.tictactoe[1].isitXorO === this.state.tictactoe[6].isitXorO) && this.state.tictactoe[7].draw === true) {
      isthereawinner = true
    } else if ((this.state.tictactoe[2].isitXorO === this.state.tictactoe[5].isitXorO) && (this.state.tictactoe[2].isitXorO === this.state.tictactoe[8].isitXorO) && this.state.tictactoe[2].draw === true) {
      isthereawinner = true
    } else if ((this.state.tictactoe[2].isitXorO === this.state.tictactoe[4].isitXorO) && (this.state.tictactoe[2].isitXorO === this.state.tictactoe[6].isitXorO) && this.state.tictactoe[2].draw === true) {
      isthereawinner = true
    }
    whoWon = ""
    if (isthereawinner === true) {
      if (this.state.isitPlayer1 === true) {
        whoWon = "Player 1 won"
      } else {
        whoWon = "Player 2 won"
      }
      this.setState ({
      gamecomplete: isthereawinner,
      isthereawinner: whoWon
      })
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

      <p>The game is done: {this.state.gamecomplete == true ? "true" : "false"}</p>
      <p>{this.state.isthereawinner} </p>
      <button onClick = {this.newGamehandleClick}>New Game</button>


      </div>
    );
  }
}

export default App;
