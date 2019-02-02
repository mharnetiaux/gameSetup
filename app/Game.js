import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';
import Direction from './controls/touch/Direction.js';
import GameArena from './components/GameArena.js';

class Game extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <section className="gameWrapper">
                <GameArena/>
                <Direction/>
            </section>
        )
    }
}

render((
    <Game/>
), document.getElementById('root'));