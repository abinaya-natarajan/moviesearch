import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { filterData } = this.props;
        console.log(filterData);
        return (
            <div className="filterContainer">
                <h2>Filter Container</h2>
                {/* {genres.map(genre => {
                   return <input type="checkbox" value={genre} />
                })} */}
            </div>
        );
    }
}

export default Filter;