import React, { Component } from 'react';

class Member extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { imgSrc, name, position } = this.props;

        return (
            <div className="boards">
                <div className="about-name">{name}</div>
                <div className="about-position">{position}</div>
                <div className="board-info">
                    <div className="board-left">
                        <img src={imgSrc} />
                    </div>
                    <div className="board-right">
                        Some text
                    </div>
                </div>
            </div>
        )
    }
}

export default Member;