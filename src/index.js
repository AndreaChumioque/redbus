import React from 'react';
import ReactDOM from 'react-dom';
import{createStore}from 'redux'
import {Provider} from 'react-redux'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const reducer =(state={
  text:'',
},action)=>{
  return state;
}


const store =createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store={store}><App /></Provider>,
 document.getElementById('root'));

registerServiceWorker();