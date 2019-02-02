import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';
import Direction from './controls/touch/Direction.js';
import House from './components/House.js';
import Tank from './components/Tank.js';


class Game extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <section className="gameWrapper">
                <section className="gameArena">
                    <House/>
                    <Tank/>
                </section>
                <section className="gamePad">
                    <Direction/>
                </section>
            </section>
        )
    }
}

render((
    <Game/>
), document.getElementById('root'));