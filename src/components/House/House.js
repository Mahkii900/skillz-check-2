import React, {Component} from 'react'

export default class House extends Component {
    render(){
        let props = this.props
        return (
            <div>
                <div>
                    {props.name}
                    {props.address}
                    {props.city}
                    {props.state}
                    {props.zip}
                    {props.img}
                    {props.mortgage}
                    {props.rent}
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}