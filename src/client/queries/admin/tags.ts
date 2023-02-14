import gql from 'graphql-tag'
import { PRE_REGISTERED_USER_FRAGMENT } from '@client/queries/fragments'
// import { ACCOUNT_TYPE } from '@prisma/client'

// adminPreRegisteredUsers
export const ADMIN_PRE_REGISTER_USERS_QUERY = gql`
  query adminPreRegisteredUsers($skip: Int!, $take: Int!, $searchKeyword: String, $accountType: ACCOUNT_TYPE) {
    adminPreRegisteredUsers(skip: $skip, take: $take, searchKeyword: $searchKeyword, accountType: $accountType) {
      ${PRE_REGISTERED_USER_FRAGMENT}
    }
    adminPreRegisteredUsersCount(searchKeyword: $searchKeyword, accountType: $accountType)
  }
`

export const ADMIN_DELETE_PRE_REGISTER_USERS_MUTATION = gql`
  mutation adminDeletePreRegisteredUsers($idList: [Int!]!) {
    adminDeletePreRegisteredUsers(idList: $idList)
  }
`
