import React, {Component} from 'react';

class Right extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <ul className="rightDirection">
                <li className="move right">Right Arrow</li>
            </ul>
        )
    }
}

export default Right;