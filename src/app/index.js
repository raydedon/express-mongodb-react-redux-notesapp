import React from 'react';
import ReactDOM from 'react-dom';
import Root from './App';
import {Provider} from 'react-redux';
import '../stylesheets/style.scss';
import configureStore from './store/configureStore.thunk';
import {fetchTodos} from './todoapp/actions/add-todo';

const store = configureStore();
store.dispatch(fetchTodos());

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('root'));
