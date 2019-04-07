import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { combineReducers, createStore} from  'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';



const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer,

}); 
const store = createStore(
    allReducers, 
    {
        products:[
            {url: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1450248078000/photosp/e41c1f0f-2ed5-4f78-b92b-9900340b5d1a/stock-photo-river-travel-adventure-walking-foot-feet-boots-hike-going-e41c1f0f-2ed5-4f78-b92b-9900340b5d1a.jpg', title:" hiking"},
            {url: "https://thumbs.dreamstime.com/z/zip-line-26475548.jpg", title:"Zip Line"}],
        user: "Michael",
    
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


/* const updateUserAction = {
    type: 'updateUser',
    payload: {
        user:'John'
    }
} 
store.dispatch(updateUserAction) */


//store.dispatch(action);


ReactDOM.render(<Provider store={store}>  <App  aRandomProps="whatever"/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
