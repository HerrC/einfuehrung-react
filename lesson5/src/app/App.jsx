import React from 'react';
import {ImageChanger } from './ImageChanger';

const images = [
    {
        src: 'https://images.freeimages.com/images/large-previews/1ad/tractor-2-1386664.jpg',
        alt: 'Traktor mit Wolken'
    },
    {
        src: 'https://images.freeimages.com/images/large-previews/2b9/tractor-1-1375996.jpg',
        alt: 'Traktor am Feld'
    },
    {
        src: 'https://images.freeimages.com/images/large-previews/c53/yellowstone-river-1361768.jpg',
        alt: 'Die Schlucht'
    },

]

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showImageChanger : true };
    }

componentDidMount() {
    setInterval(() => {
        this.setState({
                showImageChanger: false
        });
    }, 5000);
}


    render() {

        if (this.state.showImageChanger) {
            return (
                <ImageChanger images={images} updateIntervall={2000} />
            );
        } else {
            return (<h1>Stopped!</h1>);
        }

    }
}