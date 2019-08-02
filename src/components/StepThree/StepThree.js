import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {UPDATE_PROPERTY_RATES} from '../../store'

export default class StepThree extends React.Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        })
    }

    updatePropRates() {
        store.dispatch({
            type: UPDATE_PROPERTY_RATES,
            payload: {mortgage: this.state.mortgage, rent: this.state.rent}
        })
    }

    addNewHouse() {
        const {history} = this.props
        const {name, address, city, state, zipcode} = this.state
        this.updatePropRates()
        axios.post('/api/properties', {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zipcode
        })
        .catch(err => alert(err.response.result.response))
        history.push('/')
    }

    render() {
        return(
            <div>
                <div>
                    <input value={this.state.mortgage} placeholder={'Mortgage Amount'} onChange={e => this.setState({mortgage: e.target.value})}/>
                    <input value={this.state.rent} placeholder={'Rent Amount'} onChange={e => this.setState({rent: e.target.value})}/>
                </div>
                <div>
                    <Link to={'/wizard/2'}>
                        <button onClick={() => this.updatePropRates()}>Previous Step</button>
                    </Link>
                    <button onClick={() => {this.addNewHouse()}}>Complete</button>
                </div>
            </div>
        )
    }
}