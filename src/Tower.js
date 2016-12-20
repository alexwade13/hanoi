import React, { Component } from 'react';

export default class Tower extends React.Component {

  constructor(props) {
    super(props)
  }

	render(){
		var tower = this.props.tower
    var divs = []
    var width, left, style, classes, num, r, g, b, colorValue;
    for(var i=this.props.tower.length -1;i >= 0 ; i--){      
      //for determining the color of the disc
      num = (tower[i] * 255 / 54);
      r = Math.round(Math.sin(0.024 * num + 0) * 127 + 128);
      g = Math.round(Math.sin(0.024 * num + 2) * 127 + 128);
      b = Math.round(Math.sin(0.024 * num + 4) * 127 + 128);
      colorValue = 'rgb(' + r + ',' + g + ',' + b + ')';

      //determining the width of the disc based on which disc it is
      width = tower[i]*1.8 + "%";
      //determining how far in the disc will be
      left = 50 - tower[i]*1.8/2 + "%"
      style = {
        "width":width,
        "left":left,
        "background-color":colorValue
      }

      classes = "disc disc" + tower[i]
      //pushing all the divs onto an array to be returned
      divs.push(<div className={classes} style={style} key={i}></div>);      
    }

    return (<div>
    		{divs}
    		</div>
    	);
	}
}
