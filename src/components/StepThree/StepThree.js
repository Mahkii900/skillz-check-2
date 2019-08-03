import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {UPDATE_PROPERTY_RATES, CLEAR_VALUES} from '../../store'

export default class StepThree extends React.Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            st: reduxState.st,
            zip: reduxState.zip,
            img: reduxState.img,
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                st: reduxState.st,
                zip: reduxState.zip,
                img: reduxState.img,
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        })
    }

    updatePropRates() {
        const state = this.state
        store.dispatch({
            type: UPDATE_PROPERTY_RATES,
            payload: {
                mortgage: state.mortgage,
                rent: state.rent,
                name: state.name,
                address: state.address,
                city: state.city,
                state: state.st,
                zip: state.zip,
                img: state.img
            }
        })
    }

    addNewHouse() {
        const {history} = this.props
        const {name, address, city, st, zip, img, mortgage, rent} = this.state
        this.updatePropRates()
        axios.post('/api/properties', {
            name: name,
            address: address,
            city: city,
            state: st,
            zip: zip,
            img: img,
            mortgage: mortgage,
            rent: rent
        })
        .catch(err => alert(err.response.result.response))
        store.dispatch({
            type: CLEAR_VALUES
        })
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