import React, {Component} from 'react'
import axios from 'axios'
import House from '../House/House'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    state = {
        houses: []
    }

    getAllHouses() {
        axios.get('/api/houses').then(res => {
            this.setState({houses: res.data})
        })
        .catch(err => alert(err.response.request.response))
    }

    componentDidMount() {
        this.getAllHouses()
    }

    render() {
        let houses  = this.state.houses.map((house, i) => {
            return(
                <div key={i}>
                    <House
                        name={house.name}
                        address={house.address}
                        city={house.city}
                        state={house.state}
                        zip={house.zip}
                        img={house.img}
                        mortgage={house.mortgage}
                        rent={house.rent}
                    />
                </div>
            )
        })
        return(
            <div>
                <div>
                    {houses}
                </div>
                <div>
                    <Link to={'/wizard'}>
                        <button>Add New Property</button>
                    </Link>
                </div>
            </div>
        )
    }
}