import React from 'react'
import {Link} from 'react-router-dom'
import store, {UPDATE_PROPERTY_IMG} from '../../store'

export default class StepTwo extends React.Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            img: reduxState.img
        }    
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                img: reduxState.img
            })
        })
    }

    updatePropImg() {
        store.dispatch({
            type: UPDATE_PROPERTY_IMG,
            payload: this.state.img
        })
    }

    render() {
        return(
            <div>
                <div>
                    <input value={this.state.img} placeholder={'Image URL'} onChange={e => this.setState({img: e.target.value})}/>
                </div>
                <div>
                    <Link to={'/wizard/1'}>
                        <button onClick={() => this.updatePropImg()}>Previous Step</button>
                    </Link>
                    <Link to={'/wizard/3'}>
                        <button onClick={() => this.updatePropImg()}>Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}