import React from 'react';
import Filter from '../components/Filter';
import PromoContainer from '../components/PromoContainer';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieList: [],
            filterData: [],
            dataList: []
        };
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(data => this.setState({ 
            movieList: data 
        }))
    }




    render() {
        const { movieList } = this.state;
        return (
            <div className="landipageContainer">
                <Filter/>
                {movieList.map(function(listItem) {
                   return <PromoContainer {...listItem}/>
                })}
                
            </div>
        );
    }
}

export default LandingPage;