'use-strict';

export class Headline extends React.Component {
    render() {
        const myStyle = {
            color: 'red'
        }
        return <h2 style={myStyle}> { this.props.headline } </h2>
    };
}       

