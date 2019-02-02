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

    moveRight() {
        const character = document.querySelector('.tank');
        this.setState({trans: this.state.trans += 40});
        character.style[this.state.property] = 'translateX(' + this.state.trans + 'rem)';
        character.classList.add('move-right');
    }

    render(){
        return (
            <ul className="rightDirection">
                <li className="move right" onClick={this.moveRight}>Right Arrow</li>
            </ul>
        )
    }
}

export default Right;