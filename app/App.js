import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <main>
                <section><span className="circle"></span></section>
                <section><span className="rectangle"></span></section>
                <section><span className="square"></span></section>
            </main>
        )
    }
}

render((
    <App />
), document.getElementById('root'));