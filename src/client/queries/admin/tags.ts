import gql from 'graphql-tag'
import { PRE_REGISTERED_USER_FRAGMENT } from '@client/queries/fragments'
import { ACCOUNT_TYPE } from '@prisma/client'
// adminPreRegisteredUsers
export const ADMIN_PRE_REGISTER_USERS = gql`
    query adminPreRegisteredUsers($skip: Int!, $take: Int!, $searchKeyword: String) {
        adminPreRegisteredUsers(skip: $skip, take: $take, searchKeyword: $searchKeyword) {
            ${PRE_REGISTERED_USER_FRAGMENT}
        }
    }
`

export const ADMIN_PRE_REGISTER_USERS_COUNT = gql`
    query adminPreRegisteredUsersCount($searchKeyword: String) {
        adminPreRegisteredUsersCount(searchKeyword: $searchKeyword)
    }
`
