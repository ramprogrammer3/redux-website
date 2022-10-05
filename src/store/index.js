
import {createStore, combineReducers} from 'redux'
import ProductReducer from './reducers/ProductsReducer'
import CartReducer from './reducers/CartReducer';
const rootReducer = combineReducers({
    ProductReducer,
    CartReducer
})
const store = createStore(rootReducer);
export default store;