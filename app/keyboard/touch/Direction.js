import React, {Component} from 'react';
import RightArrow from './Right';


class Direction extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
           <nav className="controls">
               <RightArrow/>
           </nav>
        )
    }
}

export default Direction;