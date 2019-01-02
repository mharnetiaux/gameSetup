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
            <div>made it</div>
        )
    }
}

render((
    <App />
), document.getElementById('root'));