import React, { Component } from 'react';

export class ImageChanger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageIndex: 0
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(
            () => this.changeImageIndex(), 
            this.props.updateIntervall);
    }

    componentWillUnmount() {
        console.log(this.intervalId);
        clearInterval(this.intervalId);
    }

    changeImageIndex() {
        this.setState((state, props) => {
            return {
                imageIndex: this.getNextIndex(state.imageIndex, this.props.images.length)
            }
        });
    }

    getNextIndex(index, maxLength) {
        return (index + 1) % maxLength;
    };

    render() {
        const currentImage = this.props.images[this.state.imageIndex];
        return (
            <div>
                <img src={currentImage.src} alt={currentImage.alt}></img>
            </div>
        );
    }
}