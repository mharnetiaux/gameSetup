import React, {Component} from 'react';
import Right from './Right';


class Direction extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
           <nav className="controls">
               <Right/>
           </nav>
        )
    }
}

export default Direction;