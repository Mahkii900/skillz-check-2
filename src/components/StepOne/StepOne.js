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
            zipcode: reduxState.zipcode
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
                zipcode: reduxState.zipcode
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
        return(
            <div>
                <div>
                    <input placeholder={'Property Name'} onChange={e => this.setState({name: e.target.value})}/>
                    <input placeholder={'Address'} onChange={e => this.setState({address: e.target.value})}/>
                    <input placeholder={'City'} onChange={e => this.setState({city: e.target.value})}/>
                    <input placeholder={'State'} onChange={e => this.setState({state: e.target.value})}/>
                    <input placeholder={'Zipcode'} onChange={e => this.setState({zipcode: e.target.value})}/>
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