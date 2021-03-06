import React, {Component} from 'react';

class Right extends Component{
    constructor(){
        super();
        this.moveRight = this.moveRight.bind(this);
        this.stop = this.stop.bind(this);
        this.state = {
            transStart: 0,
            property: 'transform'
        };
    }

    moveRight(e) {
        const tank = document.querySelector('.tank'),
              wheels = document.getElementsByClassName('wheel'),
              keyCode = e.keyCode;

        if(keyCode === 39) {
            this.setState({transStart: this.state.transStart += 1});
            tank.style[this.state.property] = 'translateX(' + this.state.transStart + 'rem)';
            tank.classList.add('move-right');
            Object.values(wheels).forEach((wheel) => {
                wheel.classList.add("spin");
                wheel.classList.remove("autoSpin");
            });
        }
    }

    stop() {
        const tank = document.querySelector('.tank'),
              wheels = document.getElementsByClassName('wheel');

        tank.classList.remove('move-right');

        Object.values(wheels).forEach((wheel) => {
            wheel.classList.remove("spin");
        });
    }

    componentDidMount() {
        document.addEventListener('keydown', this.moveRight, false);
        document.addEventListener('keyup', this.stop, false);
    }

    render(){
        return (
            <ul className="rightDirection">
                <li className="move right"></li>
            </ul>
        )
    }
}

export default Right;