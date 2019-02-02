import React, {Component} from 'react';
import House from "./House";
import Tank from "./Tank";

class GameArena extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <section className="gameArena">
                <House/>
                <Tank/>
            </section>
        )
    }
}

export default GameArena;