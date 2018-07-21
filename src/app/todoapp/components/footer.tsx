import * as React from 'react';
import {VisibilityFilters} from '../actions/index';
import FilterLink from './filterlink';

const Footer: React.SFC<{}> = () => {
	return (
		<ul className="nav">
			<li className="nav-item">
				<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
			</li>
			<li className="nav-item">
				<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
			</li>
			<li className="nav-item">
				<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
			</li>
		</ul>
	);
};

export default Footer;