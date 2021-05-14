import gql from 'graphql-tag'

export default gql`
	mutation Login($password: String, $email: String) {
		login(email: $email, password: $password) {
			id
		}
	}
`
