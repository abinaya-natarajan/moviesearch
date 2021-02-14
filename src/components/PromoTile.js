import React from 'react';
import Image from './Image';

class PromoTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { imageSrc, alt } = this.props
        return (
            <div className="promotileContainer">
                <Image {...imageSrc} altText={alt}/>
            </div>
        );
    }
}

export default PromoTile;