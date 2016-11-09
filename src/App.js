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

  }
  handleClick(i){
    console.log('draws')
    console.log(i);
    let clickComplete = this.state.tictactoe;
    let isitPlayer1 = this.state.isitPlayer1;
    isitPlayer1 = !isitPlayer1;
    if (clickComplete[i].draw === false) {
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

  componentDidUpdate() {
    if (this.state.gamecomplete != true) {
      this.gameComplete();
      this.didSomeoneWin();
    }
  }

  gameComplete(){
    console.log("Checking if game is done");
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
    console.log('game is done')
    }
  }

  didSomeoneWin() {
    let isthereawinner = this.state.isthereawinner;
    var whoWon = ""
    if (this.state.tictactoe[0].isitXorO == "X" && this.state.tictactoe[1].isitXorO == "X" && this.state.tictactoe[2].isitXorO == "X" ){
      console.log('Player1 won')
      isthereawinner = true
      whoWon = "Player1 won"
    } else if(this.state.tictactoe[0].isitXorO == "X" && this.state.tictactoe[3].isitXorO == "X" && this.state.tictactoe[6].isitXorO == "X"){
      console.log('Player1 won')
      isthereawinner = true
      whoWon = "Player1 won"
    } else if(this.state.tictactoe[0].isitXorO == "X" && this.state.tictactoe[4].isitXorO == "X" && this.state.tictactoe[8].isitXorO == "X"){
      console.log('Player1 won')
      isthereawinner = true
      whoWon = "Player1 won"
    } else if(this.state.tictactoe[3].isitXorO == "X" && this.state.tictactoe[4].isitXorO == "X" && this.state.tictactoe[5].isitXorO == "X"){
      console.log('Player1 won')
      isthereawinner = true
      whoWon = "Player1 won"
    } else if(this.state.tictactoe[6].isitXorO == "X" && this.state.tictactoe[7].isitXorO == "X" && this.state.tictactoe[8].isitXorO == "X"){
      console.log('Player1 won')
      isthereawinner = true
      whoWon = "Player1 won"
    } else if(this.state.tictactoe[1].isitXorO == "X" && this.state.tictactoe[4].isitXorO == "X" && this.state.tictactoe[7].isitXorO == "X"){
      console.log('Player1 won')
      isthereawinner = true
      whoWon = "Player1 won"
    } else if(this.state.tictactoe[2].isitXorO == "X" && this.state.tictactoe[5].isitXorO == "X" && this.state.tictactoe[8].isitXorO == "X"){
      console.log('Player1 won')
      isthereawinner = true
      whoWon = "Player1 won"
    } else if(this.state.tictactoe[6].isitXorO == "X" && this.state.tictactoe[4].isitXorO == "X" && this.state.tictactoe[2].isitXorO == "X"){
      console.log('Player1 won')
      isthereawinner = true
      whoWon = "Player1 won"
    } else if(this.state.tictactoe[0].isitXorO == "O" && this.state.tictactoe[1].isitXorO == "O" && this.state.tictactoe[2].isitXorO == "O"){
      console.log('Player2 won')
      isthereawinner = true
      whoWon = "Player2 won"
    } else if(this.state.tictactoe[0].isitXorO == "O" && this.state.tictactoe[3].isitXorO == "O" && this.state.tictactoe[6].isitXorO == "O"){
      console.log('Player2 won')
      isthereawinner = true
      whoWon = "Player2 won"
    } else if(this.state.tictactoe[0].isitXorO == "O" && this.state.tictactoe[4].isitXorO == "O" && this.state.tictactoe[8].isitXorO == "O"){
      console.log('Player2 won')
      isthereawinner = true
      whoWon = "Player2 won"
    } else if(this.state.tictactoe[3].isitXorO == "O" && this.state.tictactoe[4].isitXorO == "O" && this.state.tictactoe[5].isitXorO == "O"){
      console.log('Player2 won')
      isthereawinner = true
      whoWon = "Player2 won"
    } else if(this.state.tictactoe[6].isitXorO == "O" && this.state.tictactoe[7].isitXorO == "O" && this.state.tictactoe[8].isitXorO == "O"){
      console.log('Player2 won')
      isthereawinner = true
      whoWon = "Player2 won"
    } else if(this.state.tictactoe[1].isitXorO == "O" && this.state.tictactoe[4].isitXorO == "O" && this.state.tictactoe[7].isitXorO == "O"){
      console.log('Player2 won')
      isthereawinner = true
      whoWon = "Player2 won"
    } else if(this.state.tictactoe[2].isitXorO == "O" && this.state.tictactoe[5].isitXorO == "O" && this.state.tictactoe[8].isitXorO == "O"){
      console.log('Player2 won')
      isthereawinner = true
      whoWon = "Player2 won"
    } else if(this.state.tictactoe[6].isitXorO == "O" && this.state.tictactoe[4].isitXorO == "O" && this.state.tictactoe[2].isitXorO == "O"){
      console.log('Player2 won')
      isthereawinner = true
      whoWon = "Player2 won"
    }
    if (isthereawinner === true) {
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
      if (box.draw === true) {
        tictactoestate = "tictactoeBoxActive";
        return (<div 
          onClick = {this.handleClick.bind(this, i)} 
          className = {tictactoestate}>
            {this.state.tictactoe[i].isitXorO}
          </div>)
      } else if (box.draw === false) {
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


      </div>
    );
  }
}

export default App;
