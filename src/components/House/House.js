import React, {Component} from 'react'

export default class House extends Component {
    render(){
        let props = this.props
        return (
            <div>
                <div>
                    <div>
                        Name: {props.name}
                    </div>
                    <div>
                        Address: {props.address}
                    </div>
                    <div>
                        City: {props.city}
                    </div>
                    <div>
                        State: {props.state}
                    </div>
                    <div>
                        Zipcode: {props.zip}
                    </div>
                    <div>
                        Img: {props.img}
                    </div>
                    <div>
                        Mortgage: {props.mortgage}
                    </div>
                    <div>
                        Rent: {props.rent}
                    </div>
                </div>
                <div>
                    <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
                </div>
            </div>
        )
    }
}