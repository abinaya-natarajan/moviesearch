import React from 'react';
import PromoTile from './PromoTile';


class PromoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name, image } = this.props;
        return (
            <div className="promoContainerWrapper">
                <PromoTile imageSrc={image} alt={name}/>
                <p>{id}</p>
                <p>{name}</p>
            </div>
        );
    }
}

export default PromoContainer;