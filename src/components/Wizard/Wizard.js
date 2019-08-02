import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Wziard extends Component{
    state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: null
    }

    addNewHouse() {
        const {history} = this.props
        const {name, address, city, state, zipcode} = this.state
        axios.post('/api/houses', {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zipcode
        })
        .then(() => {
            console.log('AOK')
        })
        .catch(err => alert(err.response.result.response))
        history.push('/')
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.name} placeholder={'Property Name'} onChange={e => this.setState({name: e.target.value})}/>
                    <input value={this.state.address} placeholder={'Address'} onChange={e => this.setState({address: e.target.value})}/>
                    <input value={this.state.city} placeholder={'City'} onChange={e => this.setState({city: e.target.value})}/>
                    <input value={this.state.state} placeholder={'State'} onChange={e => this.setState({state: e.target.value})}/>
                    <input placeholder={'Zipcode'} onChange={e => this.setState({zipcode: e.target.value})}/>
                </div>
                <div>
                    <button onClick={() => {this.addNewHouse()}}>Complete</button>
                </div>
                <div>
                    <Link to={'/'}>
                        <button>Cancel</button>
                    </Link>
                </div>
            </div>
        )
    }
}