import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';
import './keyboard/touch/Direction.js';

class App extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <main>
                <section>
                    <span className="obj square">
                        <span className="obj rectangle">
                            <span className="obj circle"></span>
                            <span className="obj circle"></span>
                            <span className="obj circle"></span>
                            <span className="obj circle"></span>
                            <span className="obj circle"></span>
                        </span>
                    </span>
                </section>
            </main>
        )
    }
}

render((
    <App />
), document.getElementById('root'));