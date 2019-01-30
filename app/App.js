import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';
import './keyboard/touch/Direction.js';
import styled from 'styled-components';

const MainStyle = styled.main`
    background: red;
`;

class App extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <MainStyle>
            <main>
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
            </main>
            </MainStyle>
        )
    }
}

render((
    <App/>
), document.getElementById('root'));