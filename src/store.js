import {createStore} from 'redux'

//INITAL STATE
const initialState = {
    name: '',
    address: '',
    city: '',
    st: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

//ACTION CONSTS
export const UPDATE_PROPERTY_LOCATION = 'UPDATE_PROPERTY_LOCATION'
export const UPDATE_PROPERTY_IMG = 'UPDATE_PROPERTY_IMG'
export const UPDATE_PROPERTY_RATES = 'UPDATE_PROPERTY_RATES'

//REDUCER
function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_PROPERTY_LOCATION:
            const {name, address, city} = action.payload
            const st = action.payload.state
            const zip = action.payload.zipcode
            return {...state, name: name, address: address, city: city, st: st, zip: zip}
        case UPDATE_PROPERTY_IMG:
            return {...state, img: action.payload}
        case UPDATE_PROPERTY_RATES:
            const {mortgage, rent} = action.payload
            return {...state, mortgage: mortgage, rent: rent}
        default: return state
    }
}

//EXPORTER
//export default createStore(reducer)

//For debugging purposes, comment out the export default above and uncomment the one below
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())