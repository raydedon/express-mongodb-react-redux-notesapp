import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import '../stylesheets/style.scss';
import Root from './App';
import configureStore from './store/configureStore.thunk';
import {fetchTodos} from './todoapp/actions/add-todo';

const store = configureStore();
store.dispatch(fetchTodos());

ReactDOM.render(
	<Provider store={store}>
		<Root/>
	</Provider>,
	document.getElementById('root'));
