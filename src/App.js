import React, { Component } from 'react';
import './App.css';
import Tower from './Tower'

class App extends Component {

  constructor(props) {
    super(props)
    var tower = [];
    //to have an intial screen of discs
    for (var i = 1; i < 5; i++) {
       tower.push(i);
    }
    //solved determines if the current disc arrangment has a solution that has been computed
    //solution will be an array of 2d arrays that hold the steps to take during the solution
    //speed is in ms, which changes depending on which speed button is pressed
    this.state = {
      towers:[tower,[],[]],
      solved:false,
      solution:false,
      speed: 10,
      playing: false
    }
  }

  startHanoi(speed){
    if(this.state.solved === false) {

      var solution = [];
      var hanoiSolution = function(disc,src,aux,dst) {
        if (disc > 0) {
          hanoiSolution.apply(this,[disc - 1,src,dst,aux]);
          solution.push([src,dst])
          hanoiSolution.apply(this,[disc - 1,aux,src,dst]);
        }
      };
      
      hanoiSolution.apply(this,[this.state.towers[0].length,0,1,2])
      this.setState({playing:true,solved:true,solution:solution,speed:speed},this.hanoiStep);
    }
  }


  //responsible for each individual step
  hanoiStep(){

    if(this.state.solution.length !==0 && this.state.playing) {
      var towers = this.state.towers;
      var solution = this.state.solution
      var step = solution.shift()
      towers[step[1]].unshift(towers[step[0]].shift())
      //this statement controls the animation, allowing this function to run asynchonously
      //setting the state while the next step begins its loop.
      setTimeout(()=>{this.setState({solution:solution,towers:towers}, this.hanoiStep)}, this.state.speed)     
    }
  }

  reset(){

    var tower = []
    for (var i = 1; i <= document.getElementById("selector").value; i++) {
      tower.push(i);
    }

    this.setState({solved:false,towers:[tower,[],[]]})
  }

  render() {

    var options = []

    for(var i=1; i<55;i++){
      options.push(<option value={i} key={i}>{i}</option>);
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Hanoi Towers!</h2>
          <button onClick={this.startHanoi.bind(this,.5)}>Solve Faster</button>
          <button onClick={this.startHanoi.bind(this,200)}>Solve Slower</button>
          <button onClick={this.reset.bind(this)}>Reset</button>
          <select id ="selector" onChange={this.reset.bind(this)} >
            {options}
          </select>
        </div>

        <div className="col col1"> 
          <Tower tower={this.state.towers[0]} />
        </div>
        <div className="col col2">
          <Tower tower={this.state.towers[1]} />
        </div>
        <div className="col col3">
          <Tower tower={this.state.towers[2]} />
        </div>
      </div>
    );
  }
}

export default App;
