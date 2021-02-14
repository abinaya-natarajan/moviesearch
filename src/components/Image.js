import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { medium, altText } = this.props;
        return (
            <div className="imageContainer">
                <img src={medium} alt={altText}/>
            </div>
        );
    }
}

export default Image;