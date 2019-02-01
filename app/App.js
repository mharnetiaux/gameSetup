import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';
import Direction from './keyboard/touch/Direction.js';
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
                    <section className="foundation">
                        <span className="house"></span>
                    </section>
                    <span className="tank">
                        <span className="axel">
                            <span className="wheel"></span>
                            <span className="wheel"></span>
                            <span className="wheel"></span>
                            <span className="wheel"></span>
                            <span className="wheel"></span>
                        </span>
                    </span>
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