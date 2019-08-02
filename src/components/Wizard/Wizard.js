import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepThree from '../StepThree/StepThree'

export default class Wziard extends Component{
    render() {
        return (
            <div>
                <div>
                    <Route component={StepOne} path={'/wizard/1'}/>
                    <Route component={StepTwo} path={'/wizard/2'}/>
                    <Route component={StepThree} path={'/wizard/3'}/>
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