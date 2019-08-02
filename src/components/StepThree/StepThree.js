import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class StepThree extends React.Component {
    state = {
        mortgage: 0,
        rent: 0
    }

    addNewHouse() {
        const {history} = this.props
        const {name, address, city, state, zipcode} = this.state
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
                    <input placeholder={'Mortgage Amount'} onChange={e => this.setState({mortgage: e.target.value})}/>
                    <input placeholder={'Rent Amount'} onChange={e => this.setState({rent: e.target.value})}/>
                </div>
                <div>
                    <Link to={'/wizard/2'}>
                        <button>Previous Step</button>
                    </Link>
                    <button onClick={() => {this.addNewHouse()}}>Complete</button>
                </div>
            </div>
        )
    }
}