import React from 'react'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import CurrentUser from '../queries/CurrentUser'
import Logout from './mutations/Logout'

class Header extends React.Component {
	onLogoutClick() {
		this.props.mutate({
			refetchQueries: [{ query: CurrentUser }]
		})
	}

	renderButtons() {
		const { loading, user } = this.props.data
		if (loading) {
			return <div></div>
		}
		if (user) {
			return (
				<li>
					<a onClick={this.onLogoutClick.bind(this)}>Logout</a>
				</li>
			)
		} else {
			return (
				<div>
					<li>
						<Link to="/signup">Signup</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</div>
			)
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link className="brand-logo left" to="/">
						Home
					</Link>
					<ul className="right">{this.renderButtons()}</ul>
				</div>
			</nav>
		)
	}
}

export default graphql(Logout)(graphql(CurrentUser)(Header))
