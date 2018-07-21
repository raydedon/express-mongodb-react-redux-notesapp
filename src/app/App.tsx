import * as React from 'react';
import {HashRouter} from 'react-router-dom';
import logo from '../images/logo.svg';
import * as S from '../stylesheets/App.scss';
import TodoListApp from './todoapp/todo-list-app';

class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React &amp; Redux</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<TodoListApp />
			</div>
		);
	}
}

const Root = () => (
	<HashRouter>
		<App />
	</HashRouter>
);

export default Root;
