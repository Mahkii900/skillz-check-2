import React, {Component} from 'react'
import axios from 'axios'
import House from '../House/House'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
        this.getAllHouses = this.getAllHouses.bind(this)
    }

    getAllHouses() {
        axios.get('/api/properties').then(res => {
            this.setState({houses: res.data})
        })
        .catch(err => alert(err.response.request.response))
    }

    componentDidMount() {
        this.getAllHouses()
    }

    deleteHouse(id) {
        axios.delete(`/api/properties/${id}`)
        .then(() => this.getAllHouses())
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
                        id={house.id}
                        deleteHouse={this.deleteHouse}
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