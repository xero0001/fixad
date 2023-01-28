import gql from 'graphql-tag'
import { PRE_REGISTERED_USER_FRAGMENT } from '@client/queries/fragments'

export const SIGNUP_PRE_REGISTERED_USER_MUTATION = gql`
    mutation signupPreRegisteredUser($email: String!, $password: String!) {
        signupPreRegisteredUser(email: $email, password: $password) {
            ${PRE_REGISTERED_USER_FRAGMENT}
        }
    }
`

export const Update_Tel_Name_PRE_REGISTERED_USER_MUTATION = gql`
    mutation updateTelNamePreRegisteredUser($updateTelNameId: Int!, $email: String!, $tel: String!, $name: String!) {
        updateTelNamePreRegisteredUser(id: $updateTelNameId, email: $email, tel: $tel, name: $name) {
            ${PRE_REGISTERED_USER_FRAGMENT}
        }
    }
`