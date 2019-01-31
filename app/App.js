import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';
import './keyboard/touch/Direction.js';
import styled from 'styled-components';

class App extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <section>
                <section className="foundation">
                    <span className="obj square house"></span>
                </section>

                <section className="machine">
                    <span className="obj square tank">
                        <span className="obj rectangle wheels">
                            <span className="obj circle"></span>
                            <span className="obj circle"></span>
                            <span className="obj circle"></span>
                            <span className="obj circle"></span>
                            <span className="obj circle"></span>
                        </span>
                    </span>
                </section>
            </section>
        )
    }
}

render((
    <App/>
), document.getElementById('root'));