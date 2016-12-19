import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tower from './Tower'


class App extends Component {


  constructor(props) {
    super(props)
    var tower = [];

    for (var i = 0; i <= 3; i++) {
       tower.push(i);
    }
    this.state = {
      towers:[tower,[],[]],
      sorting:false
    }
  }

  startHanoi(){
    var temp;
    var towers = this.state.towers;
    var hanoi = function(disc,src,aux,dst) {
      console.log(this)
      if (disc > 0) {
        hanoi.apply(this,[disc - 1,src,dst,aux]);
        this.wait(70);
        console.log("Move disc " + disc + " from " + src + " to " + dst + "<br />");

        towers[dst].push(towers[src].pop())
        this.setState({towers})

        hanoi.apply(this,[disc - 1,aux,src,dst]);
      }
    };
    this.setState({sorting:true});
    hanoi.apply(this,[this.state.towers[0].length,0,1,2])
    this.setState({sorting:false});
  }
  hanoiStep
  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
     end = new Date().getTime();
    }
  }
  render() {
    console.log(this.state)
    

    

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <button onClick={this.startHanoi.bind(this)}>Click me</button>
        </div>

        <div className="col1"> 
          <Tower tower={this.state.towers[0]} />
        </div>
        <div className="col2">
          <Tower tower={this.state.towers[1]} />
        </div>
        <div className="col3">
          <Tower tower={this.state.towers[2]} />
        </div>
      </div>
    );
  }
}

export default App;
