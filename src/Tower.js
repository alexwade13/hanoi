import React, { Component } from 'react';


export default class Tower extends React.Component {


  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
    	tower:props.tower

    }
  }


	render(){


		var tower = this.state.tower
		var temp;
    var divs =[]
    var width;
    var style;
    var classes;
    for(var i=0;i < this.state.tower.length; i++){
      temp = React.createElement("div");
      width = i + "%";

      classes = "disc disc" + tower[i]
      divs.push(<div className={classes} key={i}>stuff?</div>);
      

    }
    return (<div>

    		{divs}
    		</div>
    	);

	}

}
