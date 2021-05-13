import React from 'react'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import CurrentUser from '../queries/CurrentUser'

class Header extends React.Component {
	renderButtons() {
		const { loading, user } = this.props.data
		if (loading) {
			return <div></div>
		}
		if (user) {
			return <div>Logout</div>
		} else {
			return (
				<div>
					<li>
						<Link to="/signup">Sign Up</Link>
					</li>
					<li>
						<Link to="/login">Log In</Link>
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

export default graphql(CurrentUser)(Header)
