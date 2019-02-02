import React, {Component} from 'react';
//import styled from 'styled-components';

class Tank extends Component{
    constructor(){
        super();
        this.autoMove = this.autoMove.bind(this);
        this.state = {};
    }

    autoMove() {
        const tank = document.getElementsByClassName('tank'),
              wheel = document.getElementsByClassName('wheel');


        Object.values(tank).forEach((i) => {
            i.classList.add("autoMoveRight");
        });


        Object.values(wheel).forEach((i) => {
            i.classList.add("autoSpin");
        });

    }

    componentDidMount() {
        this.autoMove();
    }

    render(){
        return (
            <span className="tank">
                <span className="axel">
                    <span className="wheel"></span>
                    <span className="wheel"></span>
                    <span className="wheel"></span>
                    <span className="wheel"></span>
                    <span className="wheel"></span>
                </span>
            </span>
        )
    }
}

export default Tank;