import React from 'react'
import {Link} from 'react-router-dom'

export default class StepTwo extends React.Component {
    state = {
        img: ''
    }

    render() {
        return(
            <div>
                <div>
                    <input placeholder={'Image URL'} onChange={e => this.setState({img: e.target.value})}/>
                </div>
                <div>
                    <Link to={'/wizard/1'}>
                        <button>Previous Step</button>
                    </Link>
                    <Link to={'/wizard/3'}>
                        <button>Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}