import gql from 'graphql-tag'
import { PRE_REGISTERED_USER_FRAGMENT } from '@client/queries/fragments'

export const SIGNUP_PRE_REGISTERED_USER_MUTATION = gql`
    mutation signupPreRegisteredUser($email: String!, $password: String!) {
        signupPreRegisteredUser(email: $email, password: $password) {
            ${PRE_REGISTERED_USER_FRAGMENT}
        }
    }
`

export const FINISH_SIGNUP_PRE_REGISTERED_MUTATION = gql`
    mutation finishSignupPreRegistered($id: Int!, $email: String!, $tel: String!, $name: String!) {
        finishSignupPreRegistered(id: $id, email: $email, tel: $tel, name: $name) {
            ${PRE_REGISTERED_USER_FRAGMENT}
        }
    }
`