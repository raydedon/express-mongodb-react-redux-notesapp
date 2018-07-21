import * as React from 'react';
import {NavLink} from 'react-router-dom';

interface IFilterLinkProps {
	filter: string;
	children: string;
}

const FilterLink: React.SFC<IFilterLinkProps> = ({filter, children}) => {
	const isActive: () => boolean = () => (children as string).toUpperCase() === filter;
	return (
		<NavLink
			activeClassName="active"
			to={`/${filter}`}
			activeStyle={{
				color: 'black',
				textDecoration: 'none'
			}}
			isActive={isActive}>
			{children}
		</NavLink>
	);
}

export default FilterLink;