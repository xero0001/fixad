import gql from 'graphql-tag'
import { PRE_REGISTERED_USER_FRAGMENT } from '@client/queries/fragments'

export const SIGNUP_MUTATION = gql`
    mutation Signup($email: String!, $password: String!) {
        signup(email: $email, password: $password) {
            ${PRE_REGISTERED_USER_FRAGMENT}
        }
    }
`

export const Update_Tel_Name_MUTATION = gql`
    mutation UpdateTelName($updateTelNameId: Int!, $email: String!, $tel: String!, $name: String!) {
        updateTelName(id: $updateTelNameId, email: $email, tel: $tel, name: $name) {
            ${PRE_REGISTERED_USER_FRAGMENT}
        }
    }
`