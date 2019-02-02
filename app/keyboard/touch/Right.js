import React, {Component} from 'react';

class Right extends Component{
    constructor(){
        super();
        this.moveRight = this.moveRight.bind(this);
        this.state = {
            trans: 0,
            property: 'transform'
        };
    }

    moveRight(e) {
        const character = document.querySelector('.tank'),
              keyCode = e.keyCode;


        if(keyCode === 39) {
            this.setState({trans: this.state.trans += 3});
            character.style[this.state.property] = 'translateX(' + this.state.trans + 'rem)';
            character.classList.add('move-right');
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.moveRight, false);
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