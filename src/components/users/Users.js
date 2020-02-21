import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import '../../../src/App.css';

const Users = () => {
	const githubContext = useContext(GithubContext);
	const { loading, users } = githubContext;
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className='mobilegrid' style={userStyle}>
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

const userStyle = {
	display: 'grid',
	gridGap: '1rem'
};
export default Users;
