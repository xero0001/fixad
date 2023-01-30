import gql from 'graphql-tag'
import { PRE_REGISTERED_USER_FRAGMENT } from '@client/queries/fragments'
import { ACCOUNT_TYPE } from '@prisma/client'

export const SIGNUP_PRE_REGISTERED_USER_MUTATION = gql`
    mutation signupPreRegisteredUser($email: String!, $password: String!) {
        signupPreRegisteredUser(email: $email, password: $password) {
            ${PRE_REGISTERED_USER_FRAGMENT}
        }
    }
`

export const FINISH_SIGNUP_PRE_REGISTERED_USER_MUTATION = gql`
    mutation finishSignupPreRegisteredUser($id: Int!, $email: String!, $tel: String!, $name: String!) {
        finishSignupPreRegisteredUser(id: $id, email: $email, tel: $tel, name: $name) {
            ${PRE_REGISTERED_USER_FRAGMENT}
        }
    }
`

export const VALIDATE_PRE_SIGNUP_USER_QUERY = gql`
    query validatePreSignupUser($id : Int!, $email: String!, $accountType: ACCOUNT_TYPE!) {
        validatePreSignupUser(id: $id, email: $email, accountType: $accountType)
    }
`


