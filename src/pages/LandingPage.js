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
            movieList: data, filterData: data, dataList: data
        }))
        
        

        // fetch('http://api.tvmaze.com/shows')
        // .then(response => response.json())
        // .then(data => this.setState({ 
        //     movieList: data.forEach(element => {
        //         element.genres.forEach(genre => {
        //             result.push(element);
        //         })
                
        //     })
            
        // }))

    }




    render() {
        const { movieList, filterData } = this.state;
        console.log(filterData);
        return (
            <div className="landipageContainer">
                <Filter filterData={filterData}/>
                {movieList.map(listItem => {
                   return <PromoContainer {...listItem} />
                })}
                
            </div>
        );
    }
}

export default LandingPage;