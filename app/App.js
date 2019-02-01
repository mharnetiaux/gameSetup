import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';
import Direction from './keyboard/touch/Direction.js';
import House from './components/House.js';
import Tank from './components/Tank.js';
import "./sandBox/index.js";
//import styled from 'styled-components';

class App extends Component{
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
    <App/>
), document.getElementById('root'));