import React, {Component} from 'react';

class Right extends Component{
    constructor(){
        super();
        this.moveRight = this.moveRight.bind(this);
        this.stop = this.stop.bind(this);
        this.state = {
            trans: 2,
            property: 'transform'
        };
    }

    moveRight(e) {
        const tank = document.querySelector('.tank'),
              wheel = document.getElementsByClassName('wheel'),
              keyCode = e.keyCode;

        if(keyCode === 39) {
            this.setState({trans: this.state.trans += 2});
            tank.style[this.state.property] = 'translateX(' + this.state.trans + 'rem)';
            tank.classList.add('move-right');
            Object.values(wheel).forEach((i) => {
                i.classList.add("spin");
            });
        }
    }

    stop() {
        const tank = document.querySelector('.tank'),
              wheel = document.getElementsByClassName('wheel');

        tank.classList.remove('move-right');

        Object.values(wheel).forEach((i) => {
            i.classList.remove("spin");
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