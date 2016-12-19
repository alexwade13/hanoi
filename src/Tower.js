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


		var tower = this.props.tower
    var divs =[]
    var width;
    var left;
    var style;
    var classes;
    for(var i=this.props.tower.length -1;i >= 0 ; i--){
      
      width = tower[i] + "%";
      left = 50 - tower[i]/2 + "%"
      style = {
        width:width,
        left:left
      }

      classes = "disc disc" + tower[i]
      divs.push(<div className={classes} style={style} key={i}></div>);
      

    }
    return (<div>

    		{divs}
    		</div>
    	);

	}

}
