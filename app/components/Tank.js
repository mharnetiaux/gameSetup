import React, {Component} from 'react';
//import styled from 'styled-components';

class Tank extends Component{
    constructor(){
        super();
        this.state = {};
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