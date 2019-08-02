import React from 'react'
import store, {UPDATE_PROPERTY_LOCATION} from '../../store'
import {Link} from 'react-router-dom'

export default class StepOne extends React.Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.st,
            zipcode: reduxState.zip
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.st,
                zipcode: reduxState.zip
            })
        })
    }

    updatePropLocation() {
        store.dispatch({
            type: UPDATE_PROPERTY_LOCATION,
            payload: this.state
        })
    }

    render() {
        const location = this.state
        return(
            <div>
                <div>
                    <input value={location.name} placeholder={'Property Name'} onChange={e => this.setState({name: e.target.value})}/>
                    <input value={location.address} placeholder={'Address'} onChange={e => this.setState({address: e.target.value})}/>
                    <input value={location.city} placeholder={'City'} onChange={e => this.setState({city: e.target.value})}/>
                    <input value={location.state} placeholder={'State'} onChange={e => this.setState({state: e.target.value})}/>
                    <input value={location.zipcode} placeholder={'Zipcode'} onChange={e => this.setState({zipcode: e.target.value})}/>
                </div>
                <div>
                    <Link to={'/wizard/2'}>
                        <button onClick={() => this.updatePropLocation()}>Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}