import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tower from './Tower'


class App extends Component {


  constructor(props) {
    super(props)
    var tower = [];

    for (var i = 1; i < 5; i++) {
       tower.push(i);
    }
    this.state = {
      towers:[tower,[],[]],
      solved:false,
      solution:false,
      speed: 1000

    }
  }

  startHanoi(){
    var solution = [];
    var hanoiSolution = function(disc,src,aux,dst) {
      if (disc > 0) {
        hanoiSolution.apply(this,[disc - 1,src,dst,aux]);
        // console.log("Move disc " + disc + " from " + src + " to " + dst + "<br />");
        solution.push([src,dst])
        hanoiSolution.apply(this,[disc - 1,aux,src,dst]);
      }
    };
    
    hanoiSolution.apply(this,[this.state.towers[0].length,0,1,2])
    this.setState({solved:true,solution:solution},this.hanoiStep);
    console.log(solution)
  }

  hanoiStep(){
    if(this.state.solution.length !==0) {

      var towers = this.state.towers;
      var solution = this.state.solution
      var step = solution.shift()
      towers[step[1]].unshift(towers[step[0]].shift())

      
      setTimeout(()=>{this.setState({solution:solution,towers:towers}, this.hanoiStep)}, this.state.speed)
      
      
    }

  }

  changeSize(){
    var tower = []
    for (var i = 1; i <= document.getElementById("selector").value; i++) {
      tower.push(i);
    }
    this.setState({towers:[tower,[],[]]})
    console.log("test")
  }

  render() {
    console.log(this.state)
    var options = []
    for(var i=1; i<55;i++){
      options.push(<option value={i} key={i}>{i}</option>);
    }
    

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <button onClick={this.startHanoi.bind(this)}>solve</button>
          <select id ="selector" onChange={this.changeSize.bind(this)} >
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
