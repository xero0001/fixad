import { GraphQLClient } from 'graphql-request'
import { getAuthTokenFromLocalStorage } from '@client/utils/localStorage'

export const graphQLClient = new GraphQLClient('/api/graphql', {
  headers: {
    authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
  },
})
