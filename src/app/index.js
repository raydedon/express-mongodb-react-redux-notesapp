import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "./todoapp/reducers";
import '../stylesheets/style.scss';

const store = createStore(rootReducer, {list: [{id: 1, text: 'jai shri ram', completed: false}]});
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
