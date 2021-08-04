const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()

//Action
console.log('From index.js')
const BUY_CAKE= "BUY_CAKE";
const BUY_ICECREAM= "BUY_ICECREAM";
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

//Reducer
//(prevState, action) => newState
// const initialState = {
//     numOfCakes : 10,
//     numOfIcecream : 20
// }
const initialCakeState = {
    numOfCakes : 10
}
const initialIcecreamState = {
    numOfIcecream : 20
}
// const reducer = (state=initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes -1
//         }
//         case BUY_ICECREAM: return {
//            ...state,
//              numOfIcecream: state.numOfIcecream -1
//         }
//         default: return state
//     }
// }

const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}

const iceCreamReducer = (state=initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecream: state.numOfIcecream -1
        }
        default: return state
    }
}

//Store
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
//const store = createStore(rootReducer)
const store = createStore(rootReducer, applyMiddleware(logger))

//const store = redux.createStore(reducer)
//console.log('Initial state', store.getState())
//const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
// store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
//unsubscribe()